function MovieCard({ movie, onAdd, onRemove, isInWatchlist = false, showRemoveBtn = false }) {
  const poster = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/100x150?text=No+Image';

  const handleAddClick = () => {
    onAdd(movie);
  };

  const handleRemoveClick = () => {
    onRemove(movie.imdbID);
  };

  return (
    <div className="movie-card">
      <img src={poster} alt={`${movie.Title} poster`} />
      <div className="movie-info">
        <h5>{movie.Title}</h5>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        {showRemoveBtn ? (
          <button className="remove-btn" onClick={handleRemoveClick}>Remove</button>
        ) : (
          <>
            <button className="add-btn" onClick={handleAddClick}>+</button>
            <label>Add to watchlist</label>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieCard;