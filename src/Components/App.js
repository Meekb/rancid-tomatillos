import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import PropTypes from 'prop-types';
// import movieData from '../Data/data';
import apiCalls from './api.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // movies: movieData.movies,
      moviePoster: false,
      details: []
    }
  }


  componentDidMount = () => {
    const allMoviesUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'
    

    const getAllMovies = () => {
      fetch(allMoviesUrl)
      .then(this.checkIfError)
      .then(data => this.setState({movies: data}))
      .catch(error => console.log('Oops! Something went wrong:', error))
  }

  const checkIfError = (response) => {
    if(response.ok) {
      const currentStatus = response.status
      this.setState({ error: true })
      throw new Error(`Uh oh, something went wrong, better luck next time. Error: ${currentStatus}`)
  } else {
      return response.json()
  }

}

  const getOneMovie = (id) => {
    let oneMovieUrl = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    fetch(oneMovieUrl)
    .then(response => response.json)
    .then(data => this.setState({details: data}))
  }

  }

  displayPoster = (event) => {
    event.preventDefault(); 
    const movieId = event.target.id;
    const movieToDisplay = this.state.movies.filter(movie => {
      return (movie.id === parseInt(movieId));  
    });
    let display = true;
    this.setState({ moviePoster: display, details: movieToDisplay });
  }

  closePoster = (event) => {
    let noDisplay = false;
    this.setState({ moviePoster: noDisplay, details: [] });
  }

  //may need this - sample data ratings need to be formatted 
  formatRating = (rating) => {
    rating = rating.toFixed(2);
    return rating
  }

  formatReleaseDate = (date) => {
    console.log(date);
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    const year = date.split('-')[0];
    const formattedDate = `${month}-${day}-${year}`;
    return formattedDate;
  }

  render() {
    if (!this.state.movies.length) {
      return <p>Loading movies...</p>
    }

    return (
      <main className="home">
        < Header />
        <MoviesContainer movieData={this.state.movies} displayPoster={this.displayPoster} moviePoster={this.state.moviePoster} details={this.state.details} formatRating={this.formatRating} formatReleaseDate={this.formatReleaseDate} closePoster={this.closePoster} />
      </main>
    );
  }

}

export default App;

App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
}