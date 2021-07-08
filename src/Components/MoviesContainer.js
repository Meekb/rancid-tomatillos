import React from 'react';
import Movie from './Movie';
import './MoviesContainer.css';

const MoviesContainer = ( {movieData} ) => {
    const allMovies = movieData.map(movie => {
    return (
            <Movie 
                key={movie.id}
                id={movie.id}
                averageRating={movie.average_rating}
                releaseDate={movie.release_date}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                title={movie.title}


                />
    )
  })
  return (
      <section className='all-movies'> 
          {allMovies} 
      </section>
  )
 
}

export default MoviesContainer