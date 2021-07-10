import React from 'react';
import Movie from './Movie';
import Poster from './Poster';
import PropTypes from 'prop-types';
import './MoviesContainer.css';

const MoviesContainer = ( {movieData, moviePoster, details, handleClick} ) => {
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
            handleClick={handleClick}            
        />
    )
  });
  
  if (moviePoster) {
    const info = details[0]
    console.log('SINGLE MOVIE INFO', info)
    return <Poster 
            key={info.id}
            id={info.id}
            title={info.title}
            averageRating={info.average_rating}
            releaseDate={info.release_date}
            backdropPath={info.backdrop_path}
            posterPath={info.poster_path}
          />
  }
  return (
      <section className='all-movies'> 
          {allMovies}
      </section>
  )
 
}


export default MoviesContainer

MoviesContainer.propTypes = {
    movieData: PropTypes.array
};