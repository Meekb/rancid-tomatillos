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
      moviePoster: false
    }
  }

  // componentDidMount() {
  //   this.setState({moviePoster: false});
  // }

  handleClick = (event) => {
    event.preventDefault();
    
    const movieId = event.target.id;
    console.log(movieId);

    const movieToDisplay = this.state.movies.filter(movie => {
      return (movie.id === parseInt(movieId));  
    });
    console.log('movie to display', movieToDisplay);

    this.setState({ moviePoster: true });
    console.log('STATE:', this.state);

  }

  // write Poster component
  // write conditional in App render to display one or the other
  // depending on the value of this.state.moviePoster

  render() {
    if (!this.state.movies.length) {
      return <p>Loading movies...</p>
    }
    return (
      <main className="home">
        <h1>Putrid Physalis Philadelphica</h1>
        <MoviesContainer movieData={this.state.movies} handleClick={this.handleClick} />
      </main>
    );
  }

}

export default App;

App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
}