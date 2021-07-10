import React from 'react';
import './Poster.css';

const Poster = ( {id, title, posterPath, backdropPath, releaseDate, overview, averageRating, genres, budget, revenue, runtime, tagline, closePoster, formatRating, formatReleaseDate} ) => {

  return (
    <section className='poster' style={{
      backgroundImage: `url(${backdropPath})`,
      backgroundRepeat: 'no-repeat',
      size: 'cover'
    }}>
      {/* <img src={backdropPath} className='backdrop' alt={title} id={id}/> */}
      <h2 className='poster-title'>{title}</h2>
      <h3>{tagline}</h3>
      <p>{genres}</p>
      <p>Rated {formatRating(averageRating)} PP's</p>
      <p>Released {formatReleaseDate(releaseDate)}</p>
      <p>{overview}</p>
      <p>Runtime: {revenue}</p>
      <p>Budget: {budget}</p>
      <p>Revenue: {revenue}</p>
      <button className='back-btn' onClick={closePoster} >Back To Search</button>
    </section>
  );  
}


export default Poster;