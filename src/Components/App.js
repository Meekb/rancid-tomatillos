import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
// import Poster from './Poster'
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      moviePoster: false,
      details: []
    }
  }

  handleClick = (event) => {
    event.preventDefault(); 
    const movieId = event.target.id;
    const movieToDisplay = this.state.movies.filter(movie => {
      return (movie.id === parseInt(movieId));  
    });
    let display = true;
    this.setState({ moviePoster: display, details: movieToDisplay });
  }

  render() {
    if (!this.state.movies.length) {
      return <p>Loading movies...</p>
    }

    return (
      <main className="home">
        <h1>Putrid Physalis Philadelphica</h1>
        <MoviesContainer movieData={this.state.movies} handleClick={this.handleClick} moviePoster={this.state.moviePoster} details={this.state.details} />
      </main>
    );
  }

}

export default App;

App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
}