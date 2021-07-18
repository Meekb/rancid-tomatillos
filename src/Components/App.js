import React, { Component } from "react";
import MoviesContainer from "./MoviesContainer";
import Header from './Header'
import Poster from './Poster';
import PropTypes from 'prop-types';
import Error from './Error'
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
                path='/:id' render={({ match }) => {
                 const { id } = match.params
                return <Poster movieId={id}/>
              }}
              />
            <Route exact path='/'> 
             <MoviesContainer movieData={this.state.movies}
              />
            </Route>
            <Route component={Error} />
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