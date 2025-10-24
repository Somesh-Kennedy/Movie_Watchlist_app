import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const handleAddToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  const handleRemoveFromWatchlist = (imdbID) => {
    const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== imdbID);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<SearchPage watchlist={watchlist} onAddToWatchlist={handleAddToWatchlist} />} 
            />
            <Route 
              path="/watchlist" 
              element={<WatchlistPage watchlist={watchlist} onRemoveFromWatchlist={handleRemoveFromWatchlist} />} 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;