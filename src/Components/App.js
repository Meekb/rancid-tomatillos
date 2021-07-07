import React, { Component } from "react";
import './App.css';
import movieData from '../Data/data';
import MoviesContainer from "./MoviesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <h1>Putrid Physalis Philadelphica</h1>
        <MoviesContainer movieData={this.state.movies}/>
      </main>
    );
  }

}

export default App;
