import React, { Component } from "react";
import './App.css';
import movieData from '../Data/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <h1>Putrid Physalis Philadelphica</h1>
    );
  }

}

export default App;
