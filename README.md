# Movie Watchlist App

A React-based movie search application that allows users to search for movies using the OMDB API and maintain a personal watchlist with persistent storage.

## Features

- 🔍 **Movie Search**: Search for movies by title using the OMDB API
- 📋 **Watchlist Management**: Add and remove movies from your personal watchlist
- 💾 **Persistent Storage**: Watchlist data is saved in browser's localStorage
- 🎬 **Detailed Information**: View movie details including year, genre, rating, and runtime
- 🚀 **React Router**: Seamless navigation between search and watchlist pages
- ⚡ **Fast & Responsive**: Built with Vite for optimal performance

## Technologies Used

- **React 19.1.1** - UI library
- **React Router DOM 7.9.4** - Client-side routing
- **Vite 7.1.7** - Build tool and development server
- **OMDB API** - Movie database API
- **localStorage** - Browser storage for watchlist persistence
- **ESLint** - Code quality and style checking

## Project Structure
```
movie-search-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header component
│   │   └── MovieCard.jsx       # Reusable movie card component
│   ├── pages/
│   │   ├── SearchPage.jsx      # Movie search page
│   │   └── WatchlistPage.jsx   # User watchlist page
│   ├── styles/
│   │   └── App.css             # Application styles
│   ├── utils/
│   │   └── api.js              # API helper functions
│   ├── App.jsx                 # Main app component with routes
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── package.json                # Project dependencies
```


### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Steps

1. **Clone or download the repository**

2. **Navigate to the project directory**
```bash
   cd movie-search-app
```

3. **Install dependencies**
```bash
   npm install
```

4. **Start the development server**
```bash
   npm run dev
```

5. **Open your browser**
   
   Navigate to `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks

## Usage

### Searching for Movies

1. Navigate to the home page (Search)
2. Enter a movie title in the search box
3. Press Enter or click the "Search" button
4. Browse through the search results

### Adding to Watchlist

1. Find a movie you want to save
2. Click the "+" button below the movie
3. The movie will be added to your watchlist
4. A confirmation alert will appear
5. If the movie is already in your watchlist, you'll see a warning

### Managing Watchlist

1. Click "My Watchlist" in the navigation
2. View all your saved movies
3. Click "Remove" button to delete a movie from your watchlist
4. Your watchlist is automatically saved in browser storage

## API Configuration

This app uses the OMDB API. The API key is configured in `src/utils/api.js`:
```javascript
export const API_KEY = 'bfb72e9d';
export const API_URL = 'https://www.omdbapi.com/';
```

To use your own API key:
1. Get a free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Replace the `API_KEY` value in `src/utils/api.js`

## Component Details

### Header
- Navigation component with links to Search and Watchlist pages
- Uses React Router's `Link` component for navigation

### MovieCard
- Reusable component for displaying movie information
- Props: `movie`, `onAdd`, `onRemove`, `showRemoveBtn`
- Displays poster, title, year, genre, rating, and runtime
- Shows either "Add" or "Remove" button based on page context

### SearchPage
- Main search interface
- Handles API calls for movie search
- Fetches detailed information for each movie
- Prevents duplicate entries in watchlist

### WatchlistPage
- Displays saved movies from localStorage
- Shows empty state when no movies are saved
- Allows removal of movies from watchlist

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Local Storage

The app stores watchlist data in browser's localStorage with the key `watchlist`. Data persists across browser sessions until manually cleared.

## Troubleshooting

### Movies not loading
- Check your internet connection
- Verify the API key is valid
- Check browser console for error messages

### Watchlist not persisting
- Ensure browser allows localStorage
- Check if you're in private/incognito mode
- Clear browser cache and try again

### npm install stuck
```bash
npm cache clean --force
npm install
```

## Future Enhancements

- [ ] Add movie filtering and sorting options
- [ ] Implement movie categories/tags
- [ ] Add user ratings and notes
- [ ] Export watchlist feature
- [ ] Dark mode toggle
- [ ] Search history
- [ ] Movie recommendations

## License

This project is created for educational purposes.

## Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- [Vite](https://vitejs.dev/) for the excellent build tool
- [React](https://react.dev/) for the UI library

## Contact

For questions or feedback, please reach out to the project maintainers.

---
