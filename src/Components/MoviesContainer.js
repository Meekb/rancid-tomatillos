import React from 'react';
import Movie from './Movie';
import './MoviesContainer.css';

const MoviesContainer = ( {movieData} ) => {
    const allMovies = movieData.map(movie => {
    return (
            <Movie 
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                />
        
    )
  })
  return (
      <section> 
          {allMovies} 
      </section>
  )
 
}

export default MoviesContainer