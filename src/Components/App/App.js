import React, { Component } from "react";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Header from '../Header/Header'
import Poster from '../Poster/Poster';
import PropTypes from 'prop-types';
import Error from '../Error/Error'
import movieData from '../../Data/data';
import {fetchMovieCollection} from '../apiCalls'
import { Route, Switch } from 'react-router-dom';
import './App.css';


const App = () => {
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: movieData.movies,
//       error: '',
//       moviePoster: false,
//     }
//   }
  
//   componentDidMount() {
//     fetchMovieCollection()
//     .then(
//       (moviesData) => {
//         this.setState({
//           movies: moviesData.movies
//         })
//       }
//     )
//     .catch(error => this.setState({error: '😬 uh oh something went wrong'}))
// }

// newMovieState = (searchResult) => {
//   if (!searchResult.length) {
//     this.setState({appError: 'Looks like we don\'t have that one - try another search'})
//   } else {
//     this.setState({movies: <MoviesContainer/>, error: ''})
//   }
// }

 
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