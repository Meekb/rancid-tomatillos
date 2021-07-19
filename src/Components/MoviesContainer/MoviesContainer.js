import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import './MoviesContainer.css';

class MoviesContainer extends Component {
  constructor() {
    super() 
    this.state= {
      movies: movie,
      error: '',
      moviePoster: true
    }
  }

  componentDidMount() {
    fetchMovieCollection()
    .then(
      (moviesData) => {
        this.setState({
          movies: moviesData.movies
        })
      }
    )
    .catch(error => this.setState({error: '😬 uh oh something went wrong'}))
}

renderAllPosters = (movies) => {
  const allMovies = movies.map(movie => {
    return (  
        <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      )
    });
  return (
    <section className='all-movies'> 
      {allMovies}
    </section>
  )
}

newMovieState = (searchResult) => {
  if (!searchResult.length) {
    this.setState({error: 'Looks like we don\'t have that one - try another search'})
  } else {
    this.setState({movies: this.renderAllPosters(searchResult), error: ''})
  }
}

render() {
  return (
    <section className='all-movies'>
      {!this.state.movies.length && this.state.error && <h2>500 Error!</h2>}
      {!this.state.movies.length && !this.state.error && <h2>Loading all movies...</h2>}
      
    </section>
  )
}

}


// const MoviesContainer = ( {movieData} ) => {
//   const allMovies = movieData.map(movie => {
//     return (  
//         <Movie 
//           key={movie.id}
//           id={movie.id}
//           title={movie.title}
//           posterPath={movie.poster_path}
//         />
//       )
//     });
//   return (
//     <section className='all-movies'> 
//       {allMovies}
//     </section>
//   );
}

export default MoviesContainer
MoviesContainer.propTypes = {
    movieData: PropTypes.array
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: movieData.movies,
//       error: '',
//       moviePoster: false,
//     }
//   }
  
//   componentDidMount() {
//     fetchMovieCollection()
//     .then(
//       (moviesData) => {
//         this.setState({
//           movies: moviesData.movies
//         })
//       }
//     )
//     .catch(error => this.setState({error: '😬 uh oh something went wrong'}))
// }

// newMovieState = (searchResult) => {
//   if (!searchResult.length) {
//     this.setState({appError: 'Looks like we don\'t have that one - try another search'})
//   } else {
//     this.setState({movies: <MoviesContainer/>, error: ''})
//   }
// }
