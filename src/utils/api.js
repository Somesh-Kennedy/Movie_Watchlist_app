export const API_KEY = 'EnterYourAPIKeyHere';
export const API_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${imdbID}`);
  const details = await response.json();
  return details;
};