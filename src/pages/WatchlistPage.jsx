import MovieCard from '../components/MovieCard';

function WatchlistPage({ watchlist, onRemoveFromWatchlist }) {
  if (watchlist.length === 0) {
    return (
      <div className="empty-message">
        <h2>Your watchlist is empty!</h2>
        <p>Start adding movies from the <span style={{ color: '#ffcc00', fontWeight: 'bold' }}>Search</span> page.</p>
      </div>
    );
  }

  const handleRemove = (imdbID) => {
    onRemoveFromWatchlist(imdbID);
  };

  return (
    <section className="movie-list">
      {watchlist.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAdd={() => {}}
          onRemove={handleRemove}
          showRemoveBtn={true}
        />
      ))}
    </section>
  );
}

export default WatchlistPage;