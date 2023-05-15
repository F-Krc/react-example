import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const MovieList = ({ movies, onMovieClick }) => {
      if (!movies || movies.length === 0) {
        return <p>Search a Movie</p>;
      }
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 5;

  const indexOfLastMovie = (currentPage + 1) * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='movieList'>
      {currentMovies.map((movie) => (
        <div key={movie.imdbID} onClick={() => onMovieClick(movie.imdbID)}>
          <h3> {movie.Title}</h3>
        </div>
      ))}

      <ReactPaginate
        pageCount={Math.ceil(movies.length / moviesPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default MovieList;
