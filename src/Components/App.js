import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import Poster from './Poster';
import PropTypes from 'prop-types';
import movieData from '../Data/data';
import {fetchMovieCollection} from './apiCalls'
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
    .catch(error => console.log({error}))
}

 
  render() {
    return (
      <main>
        <Header />
          <Switch>
            <Route
                path='/movies/:id' render={({ match }) => {
                 const { id } = match.params
                 console.log(id)
                return <Poster movieId={id}/>
              }}
              />
            <Route exact path='/'> 
             <MoviesContainer movieData={this.state.movies}
              />
            </Route>
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


/* <main> 
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
    ); */


// displayChosenCard = (id) => {
//   const isMovieID = this.state.movies.find(movie => movie.id === id);
//   return isMovieID ? (
//     <Poster id={id} />
//   ) : (
//     <Redirect to='/'/>
//   )
// }

