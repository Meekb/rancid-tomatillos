import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import Poster from './Poster';
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      moviePoster: null,
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
  .catch(() => this.setState({ error: 'Something went wrong'}));
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
        console.log(singleMovie)
        this.setState({
          moviePoster: true,
          details: singleMovie.movie
        })
      }
    )
    .catch(() => this.setState({ error: 'Something went wrong'}));    
    return movieToDisplay
  }

  closePoster = (event) => {
    event.preventDefault();
    this.setState({ moviePoster: false, details: [] });
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

    if (this.state.details) {
      return (
        <main>
          < Header />
          <section className='movie-area'>
            <Poster details={this.state.details} closePoster={this.closePoster}/>}
          </section>
        </main>
      );
    }
    
    return (
      <main className="home">

        < Header />
        <section className='library'>
          <MoviesContainer movieData={this.state.movies} displayPoster={this.displayPoster} moviePoster={this.state.moviePoster} details={this.state.details} formatRating={this.formatRating} formatReleaseDate={this.formatReleaseDate} closePoster={this.closePoster} />
        </section>
        
      </main>
    );

  }
  
}

export default App;

App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
  
  
  // if (!!this.state.movies.length) {
  //   return <p>Loading movies...</p>
  // }
  // if (!!this.state.moviePoster) {
  //   console.log(this.state.details);
  //   return <Poster 
  //             details={this.state.details}
  //           //  key={details.id}
  //           //  id={details.id}
  //           //  title={details.title}
  //           //  posterPath={details.poster_path}
  //           //  backdropPath={details.backdrop_path}
  //           //  releaseDate={details.release_date}
  //           //  overview={details.overview}
  //           //  averageRating={details.average_rating}
  //           //  genres={details.genres}
  //           //  budget={details.budget}
  //           //  revenue={details.revenue}
  //           //  runtime={details.runtime}
  //           //  tagline={details.tagline}
  //           //  formatRating={formatRating}
  //           //  formatReleaseDate={formatReleaseDate}
  //           //  closePoster={closePoster}
  //           />
  // }
}