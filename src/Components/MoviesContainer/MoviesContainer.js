import React from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import './MoviesContainer.css';
const MoviesContainer = ( {movieData} ) => {
  const allMovies = movieData.map(movie => {
    return (  
        <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          averageRating={movie.average_rating}
          releaseDate={movie.release_date}
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
        />
      )
    });
  return (
    <section className='all-movies'> 
      {allMovies}
    </section>
  );
}
export default MoviesContainer
MoviesContainer.propTypes = {
    movieData: PropTypes.array
};