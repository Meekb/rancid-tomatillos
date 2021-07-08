import React, { Component } from "react";
import './App.css';
import movieData from '../Data/data';
import MoviesContainer from "./MoviesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      newMovie: null
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('YOU CLICKED A MOVIE')
    // let movieId = parseInt(event.target.id);
    // let movieMatch= this.state.movies.find(movie => movie.id === movieId);
    // this.setState({ newMovie: movieMatch });
    // console.log('state:', this.state.newMovie)
  }

  render() {
    return (
      <main className="home">
        <h1>Putrid Physalis Philadelphica</h1>
        <MoviesContainer movieData={this.state.movies} handleClick={this.handleClick}/>
      </main>
    );
  }

}

export default App;
