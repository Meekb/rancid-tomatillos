import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      moviePoster: null
    }
  }

  displayClickedMovie = (event) => {
    event.preventDefault();
    const movieId = event.target.id;

    const movieMatch = this.state.movies.filter(movie => {
      return (movie.id === parseInt(movieId)); 
    });
    
    this.setState({ displayedMovie: movieMatch });
    console.log('state:', this.state.displayedMovie)
  }

  render() {
    if (!this.state.movies.length) {
      return <p>Loading movies...</p>
    }
    return (
      <main className="home">
        <h1>Putrid Physalis Philadelphica</h1>
        <MoviesContainer movieData={this.state.movies} displayClickedMovie={this.displayClickedMovie}/>
      </main>
    );
  }

}

export default App;

App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.object || null,
}