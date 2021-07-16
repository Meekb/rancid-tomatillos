import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import Poster from './Poster';
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import {fetchMovieCollection, fetchOneMovie} from './apiCalls'
import { Route, Switch } from 'react-router-dom';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      moviePoster: false,
      // details: null,
      // error: false
    }
  }
  
  componentDidMount() {
    fetchMovieCollection()
    .then(
      (moviesData) => {
        this.setState({
          movies: moviesData.movies
        })
      }
    )
    .catch(error => this.setState({error: true}))
}

  // displayPoster = (event) => { 
  //   const movieId = parseInt(event.target.id);
  //   console.log(movieId);
  //   let found = this.state.movies.filter(movie => {
  //     return (movie.id === parseInt(movieId));  
  //   });
  //   console.log('found', found)
  //   //fetchone movie would go here 
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  //   .then(data => data.json())
  //   .then(
  //     (singleMovie) => { 
  //       this.setState({
  //         moviePoster: true,
  //         details: singleMovie.movie
  //       })
  //       console.log('STATE:', this.state.moviePoster, this.state.details);
  //     }
  //   )
  //   .catch(() => this.setState({ error: 'Something went wrong'}));    
  // }
  // closePoster = (event) => {
  //   this.setState({ moviePoster: false, details: [] });
  // }
  // convertNumForDisplay = (number) => {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }
  // displayGenres = (genreArr) => {
  //   const allGenres = genreArr.map(genre => genre + " ");
  //   return allGenres; 
  // }
  // //may need this - sample data ratings need to be formatted 
  // formatRating = (rating) => {
  //   rating = rating.toFixed(2);
  //   return rating
  // }
  // formatReleaseDate = (date) => {
  //   const month = date.split('-')[1];
  //   const day = date.split('-')[2];
  //   const year = date.split('-')[0];  
  //   const formattedDate = `${month}/${day}/${year}`;
  //   return formattedDate;
  // }
  render() {
    return (
      <main>
        <Header />
          <Switch>
            <Route exact path='/'> 
             <MoviesContainer movieData={this.state.movies} />
            </Route>
            <Route
              path='movies/:id' render={({ match }) => {
                const { id } = match.params
                return <Poster movieID={id} className="all-movies" />
              }}
            />
          </Switch>
      </main>
    )
  }
};

export default App;

App.propTypes = {
  movies: PropTypes.object,
  moviePoster: PropTypes.bool
};


{/* <main> 
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
          console.log('match parems id', id); 
          return <Poster details={this.state.details} closePoster={this.closePoster} convertNumForDisplay={this.convertNumForDisplay} displayGenres={this.displayGenres} formatRating={this.formatRating} formatReleaseDate={this.formatReleaseDate} id={id}  />
        }}
        />
      }
    </main>
    ); */}


// displayChosenCard = (id) => {
//   const isMovieID = this.state.movies.find(movie => movie.id === id);
//   return isMovieID ? (
//     <Poster id={id} />
//   ) : (
//     <Redirect to='/'/>
//   )
// }

