import React from 'react';
import './Poster.css';
import { NavLink } from 'react-router-dom';

const Poster = ({closePoster, convertNumForDisplay, details, displayGenres, formatRating, formatReleaseDate}) => {
  if (details) {
    console.log(details);
    details = details.movie;
    return (
      <section   
        className='poster' style={{
        backgroundImage: `url(${details.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        size: 'cover'
      }}>
        <img src={details.poster_path} className='cover-image' alt={details.title} id={details.id}/>
        <div className='poster-container'>
        <div className='title-tag'>
          <h2 className='poster-title'> {details.title} </h2>
          <p className='tagline'> {details.tagline} </p>
        </div>
        <div className='details'>
          <p className='genre'>Genres: {!details.genres ? "unavailable" : displayGenres(details.genres)}</p>
          <p className='rating'>Avg Rating: {formatRating(details.rating)} Putridities</p>
          <p className='released'>Released {formatReleaseDate(details.releaseDate)}</p>
          <p className='overview'> {!details.overview ? "No overview for this movie!" : details.overview} </p>
          <p className='runtime'>Runtime: {details.runtime} minutes </p>
          <p className='budget'>Budget: {!details.budget ? "unavailable" : `$${convertNumForDisplay(details.budget)}`}</p>
          <p className='revenue'>Revenue: {!details.revenue ? "unavailable" : `$${convertNumForDisplay(details.revenue)}`}</p>
        </div>
  
        <NavLink to='/'>
        <div className='button'>
          <button aria-label='Back To Search' className='back-btn' onClick={closePoster} >Back To Search</button>
        </div>
        </NavLink>
        </div>  
      </section>
    );  
  }
}

export default Poster;

