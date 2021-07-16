import React, { Component } from 'react';
import Movie from './Movie';
import Poster from './Poster';
import PropTypes from 'prop-types';
import { fetchOneMovie } from './apiCalls';
import './MoviesContainer.css';

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false,
      details: [],
    }
  }

  displayPoster = (event) => { 
    const movieId = parseInt(event.target.id);
    this.props.movieData.filter(movie => {
      return (movie.id === parseInt(movieId));  
    });
    fetchOneMovie(movieId)
    .then(data => this.setState({ displayed: true, details: data }))
  }

  closePoster = (event) => {
    this.setState({ displayed: false, details: [] });
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
    rating = this.state.details.movie.average_rating
    return rating.toFixed(2);
  }

  formatReleaseDate = (date) => {
    date = this.state.details.movie.release_date
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    const year = date.split('-')[0];  
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }
  
  render() {
    const allMovies = this.props.movieData.map(movie => {
      return (  
        <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          averageRating={movie.average_rating}
          releaseDate={movie.release_date}
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
          displayPoster={this.displayPoster}            
        />
        )
      });
    return (
      <section className='all-movies'> 
        {!this.state.displayed && allMovies}
        {this.state.displayed && <Poster displayed={this.state.displayed} details={this.state.details} displayGenres={this.displayGenres} closePoster={this.closePoster} formatReleaseDate={this.formatReleaseDate} formatRating={this.formatRating} convertNumForDisplay={this.convertNumForDisplay} state={this.state} />}
      </section>
    );
  }
}

export default MoviesContainer

MoviesContainer.propTypes = {
  displayed: PropTypes.bool,
  details: PropTypes.array
};