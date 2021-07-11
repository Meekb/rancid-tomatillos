import React from 'react';
import Movie from './Movie';
import Poster from './Poster';
import PropTypes from 'prop-types';
import './MoviesContainer.css';

const MoviesContainer = ({movies}, props) => {
    const allMovies = movies.movies.map(movie => {
    return (
        <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            averageRating={movie.average_rating}
            releaseDate={movie.release_date}
            backdropPath={movie.backdrop_path}
            posterPath={movie.poster_path}
            displayPoster={displayPoster(movie.id)}            
        />
    )
  });
  
//   if (moviePoster) {
//     const info = details[0]
//     console.log('SINGLE MOVIE INFO', info)
//     return <Poster 
//             key={info.id}
//             id={info.id}
//             title={info.title}
//             posterPath={info.poster_path}
//             backdropPath={info.backdrop_path}
//             releaseDate={info.release_date}
//             overview={info.overview}
//             averageRating={info.average_rating}
//             genres={info.genres}
//             budget={info.budget}
//             revenue={info.revenue}
//             runtime={info.runtime}
//             tagline={info.tagline}
//             formatRating={formatRating}
//             formatReleaseDate={formatReleaseDate}
//             closePoster={closePoster}
//           />
//   }
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