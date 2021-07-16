import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import PropTypes from 'prop-types';
import { fetchMovieCollection } from './apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: false
    }
  }
  
  componentDidMount = () => {
    fetchMovieCollection()
    .then(data => this.setState({
      movies: data.movies,
    })
  )
  .catch(error => this.setState({error: 'Something went wrong!'}))
  }

  render() {
    return (
    <main> 
      <Header />
      <MoviesContainer movieData={this.state.movies} />
    </main>
    );
  }
};

export default App;

App.propTypes = {
  movies: PropTypes.array,
  moviePoster: PropTypes.bool,
};