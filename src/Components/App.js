import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import Poster from './Poster';
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import { Route } from 'react-router-dom';
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
    // .then(this.checkForError)
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
    const movieId = event.target.id;
    const movieToDisplay = this.state.movies.filter(movie => {
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
      }
    )
    .catch(() => this.setState({ error: 'Something went wrong'}));    
    // return movieToDisplay
  }
  closePoster = (event) => {
    event.preventDefault();
    this.setState({ moviePoster: false, details: [] });
    console.log('CLICKED');
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
    return (
      <main> 
        <Header />
        <Route exact path='/' render={() =>{
            if (!this.state.error) {
              return <MoviesContainer movieData={this.state.movies} 
              displayPoster={this.displayPoster} 
              moviePoster={this.state.moviePoster} 
              details={this.state.details} 
               />
            } 
            }
          }
        />
        <Route exact path='/:id' render={({match}) => {
          const id = parseInt(match.params.id);
          if (this.state.moviePoster) {
            return <Poster 
                    details={this.state.details} 
                    formatReleaseDate={this.formatReleaseDate} 
                    formatRating={this.formatRating} 
                    closePoster={this.closePoster} 
                    id={id}/>
          } 
        }}/>
      </main>
      )
    }
  }


export default App;
App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
}
