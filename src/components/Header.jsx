import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Movie Search</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Search</Link>
        <Link to="/watchlist" className="nav-link">My Watchlist</Link>
      </nav>
    </header>
  );
}

export default Header;