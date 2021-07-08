import React, { Component } from 'react';
import singleMovie from '../Data/singleMovie';
import './Poster.css';

class Poster extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: singleMovie.movie
    }
  }

  render() {
    const info = this.state.singleMovie
    return (
      <section className='poster'>
        <h2>{info.title}</h2>
        <p>Rated {info.average_rating} PP's</p>
      </section>
    );
  }

}

export default Poster;