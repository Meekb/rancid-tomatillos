import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import Poster from '../Poster/Poster'
import {fetchMovieCollection} from '../apiCalls'
import Search from '../Search/Search'
import './MoviesContainer.css';

class MoviesContainer extends Component {
  constructor() {
    super() 
    this.state= {
      movies: [],
      error: '',
      moviePoster: true,
      searchResult: []
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

renderAllPosters = () => {
  const allMovies = this.state.movies.map(movie => {
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

renderSearchResults = () => {
  const searchedMovies = this.state.searchResult.map(movie => {
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
      <section>
        {searchedMovies}
      </section>
     
    )
}

newMovieState = (searchResult) => {
  if (!searchResult.length) {
    this.setState({error: 'Looks like we don\'t have that one - try another search'})
  } else {
    this.setState({searchResult, error: ''})
  }
}

findMovies = (userSearch) => {
  console.log(userSearch)
  let foundMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(userSearch))
  console.log(foundMovies)
  this.setState({searchResult: foundMovies})
  this.newMovieState(foundMovies)
  console.log(this.state)
}

render() {
  return (
    <section>
      {!this.state.movies.length && this.state.error && <h2>500 Error!</h2>}
      {/* {!this.state.movies.length && !this.state.error && <h2>Loading all movies...</h2>} */}
      {this.state.movies ? <Search findMovies={this.findMovies} /> : null}
      {this.state.movies && this.state.searchResult &&
      <section>
        {this.renderSearchResults()}
        </section>
        }
      {!this.state.error && !this.state.searchResult.length &&
        <section>
          {this.renderAllPosters()}
        </section>
      }
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
