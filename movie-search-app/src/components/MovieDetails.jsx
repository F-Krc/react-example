import React, { useState, useEffect } from 'react';

function MovieDetails({ movieId, apiKey }) {
  const [movieDetails, setMovieDetails] = useState(null);
  //console.log(apiKey);

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
    const data = await response.json();
    console.log(data);
    setMovieDetails(data);
  };
  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  console.log(movieDetails);

  const { Title, Poster, Genre, Plot, Actors } = movieDetails;

  return (
    <div className="movieDetails">
      <h2>{Title}</h2>
      <img src={Poster} alt={Title} />
      <p>Genre: {Genre}</p>
      <p>Plot: {Plot}</p>
      <p>Actors: {Actors}</p>
    </div>
  );
}

export default MovieDetails;
