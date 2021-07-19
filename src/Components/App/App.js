import React from "react";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import Header from '../Header/Header'
import Poster from '../Poster/Poster';
import PropTypes from 'prop-types';
import Error from '../Error/Error'
import { Route, Switch } from 'react-router-dom';
import './App.css';


const App = () => {
    return (
      <main>
        <Header />
          <Switch>
            <Route exact path='/' component={MoviesContainer} />
            <Route
                exact path='/movies/:id' render={({ match }) => {
                  const { id } = match.params
                  return <Poster movieId={id}/>
                }}
              /> 
              <Route component={Error}/>
          </Switch>
      </main>
    )
  };
  
  export default App;
  
  App.propTypes = {
    movies: PropTypes.object,
    moviePoster: PropTypes.bool
  };
  