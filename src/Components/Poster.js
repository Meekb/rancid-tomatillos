import React, { Component } from 'react';
import singleMovie from '../Data/singleMovie';
import './Poster.css';

class Poster extends Component {
  constructor({displayMovie}) {
    super();
    this.state = {
      moviePoster: singleMovie.movie
    }
  }

  render() {
    const info = this.state.moviePoster;
    return (
      <section className='poster'>
        <h2>{info.title}</h2>
        <p>{info.genres[0]}</p>
        <p>Rated {info.average_rating} PP's</p>
        <p>Released {info.release_date}</p>
        <p>{info.overview}</p>
        <p>Runtime: {info.revenue}</p>
        <p>Budget: {info.budget}</p>
        <p>Revenue: {info.revenue}</p>
      </section>
    );
  }

}

export default Poster;