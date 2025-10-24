import { useState } from 'react';
import { searchMovies, fetchMovieDetails } from '../utils/api';
import MovieCard from '../components/MovieCard';

function SearchPage({ watchlist, onAddToWatchlist }) {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const query = searchInput.trim();

    if (!query) {
      alert('Please enter a movie title');
      return;
    }

    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const data = await searchMovies(query);

      if (data.Response === 'True') {
        await fetchAndDisplayMovies(data.Search);
      } else {
        setError('No movies found. Try a different search term.');
      }
    } catch (err) {
      setError('Error loading movies. Please try again.');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAndDisplayMovies = async (searchResults) => {
    const detailedMovies = [];

    for (const movie of searchResults) {
      try {
        const details = await fetchMovieDetails(movie.imdbID);

        if (details.Response === 'True') {
          detailedMovies.push(details);
        }
      } catch (err) {
        console.error('Error fetching movie details:', err);
      }
    }

    setMovies(detailedMovies);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleAddClick = (movie) => {
    const exists = watchlist.some(item => item.imdbID === movie.imdbID);
    
    if (exists) {
      alert('This movie is already in your watchlist!');
      return;
    }

    const movieData = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      Genre: movie.Genre,
      imdbRating: movie.imdbRating,
      Runtime: movie.Runtime
    };

    onAddToWatchlist(movieData);
    alert(`"${movie.Title}" added to your watchlist!`);
  };

  return (
    <div className="search-page">
      <section className="search">
        <input
          type="text"
          id="searchInput"
          placeholder="Enter movie title..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button id="searchBtn" onClick={handleSearch}>Search</button>
      </section>

      {error && <p className="error-message">{error}</p>}

      {loading && <p className="loading-message">Loading movies...</p>}

      <section className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onAdd={handleAddClick}
            showRemoveBtn={false}
          />
        ))}
      </section>
    </div>
  );
}

export default SearchPage;