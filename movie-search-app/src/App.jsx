import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const API_KEY = 'c8439468';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}&`);
        const data = await response.json();
        console.log(data);

        setMovies(data.Search);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  console.log(movies);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  console.log(selectedMovieId);
  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={setSearchQuery} />
      {selectedMovieId ? (
        <MovieDetails movieId={selectedMovieId} apiKey={API_KEY} />
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} apiKey={API_KEY} />
      )}
    </div>
  );
};

export default App;
