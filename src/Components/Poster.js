import React from 'react';
import './Poster.css';

const Poster = ( {id, title, posterPath, backdropPath, releaseDate, overview, averageRating, genres, budget, revenue, runtime, tagline} ) => {

  // const backdrop = {
  //   backgroundImage: 'url({backdropPath}) no-repeat',
  //   backgroundSize: 'cover',
  // }

  return (
    <section className='poster' style={{
      backgroundImage: `url(${backdropPath})`,
      backgroundRepeat: 'no-repeat',
      size: 'cover'
    }}>
      {/* <img src={backdropPath} className='backdrop' alt={title} id={id}/> */}
      <h2>{title}</h2>
      <h3>{tagline}</h3>
      <p>{genres}</p>
      <p>Rated {averageRating} PP's</p>
      <p>Released {releaseDate}</p>
      <p>{overview}</p>
      <p>Runtime: {revenue}</p>
      <p>Budget: {budget}</p>
      <p>Revenue: {revenue}</p>
      <button className='back-btn'>Back To Search</button>
    </section>
  );  
}


export default Poster;