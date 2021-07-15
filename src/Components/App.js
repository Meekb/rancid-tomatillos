import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import Poster from './Poster';
import Movie from "./Movie";
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      moviePoster: false,
      details: null,
      error: false
    }
  }
  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
    .then(data => data.json())
    .then(
      (moviesData) => {
        this.setState({
          movies: moviesData.movies
        });
    },
  )
  .catch(this.checkForError);
}

  checkForError = (response) => {
    if (!response.ok) {
      const status = response.status;
      this.setState( {error: true} )
      throw new Error(`Uh oh, something's not right. Error: ${status}`)
    } else {
      return response.json()
  }
}

  displayPoster = (event) => {
    event.preventDefault(); 
    const movieId = parseInt(event.target.id);
    console.log(movieId);
    this.state.movies.filter(movie => {
      return (movie.id === parseInt(movieId));  
    });
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(data => data.json())
    .then(
      (singleMovie) => { 
        this.setState({
          moviePoster: true,
          details: singleMovie.movie
        })
        console.log(this.state.moviePoster, this.state.details);
      }
    )
    .catch(() => this.setState({ error: 'Something went wrong'}));    
    // return movieToDisplay
  }
  closePoster = (event) => {
    event.preventDefault();
    this.setState({ moviePoster: false, details: [] });
  }
  convertNumForDisplay = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  displayGenres = (genreArr) => {
    const allGenres = genreArr.map(genre => genre + " ");
    return allGenres; 
  }
  //may need this - sample data ratings need to be formatted 
  formatRating = (rating) => {
    rating = rating.toFixed(2);
    return rating
  }
  formatReleaseDate = (date) => {
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    const year = date.split('-')[0];  
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  render() {
    return (
    <main> 
      <Header />
      {!this.state.moviePoster &&
        <Route path='/' render={() =>{
          return <MoviesContainer movieData={this.state.movies} details={this.state.details} displayPoster={this.displayPoster} />  
        }}
        />
      }

      {this.state.moviePoster && 
        <Route path='/movies/:id' render={({match}) => {
          const { id } = match.params 
          return <Poster details={this.state.details} closePoster={this.closePoster} convertNumForDisplay={this.convertNumForDisplay} displayGenres={this.displayGenres} formatRating={this.formatRating} formatReleaseDate={this.formatReleaseDate}  />
        }}
        />
      }
    </main>

    );
  }

};


export default App;
App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
};


{/* <Route exact path='/:id' render={({match}) => {
      
  const id = parseInt(match.params.id);
  
  if (this.state.moviePoster) {
    return (
    <div>
      <Header />
      <Poster 
        details={this.state.details} 
        formatReleaseDate={this.formatReleaseDate} 
        formatRating={this.formatRating} 
        closePoster={this.closePoster} 
        id={id}
      />
    </div>
    );
  } 
}}/> */}
