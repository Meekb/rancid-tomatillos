import React from 'react';
import './Poster.css';

const Poster = ( {title} ) => {
  console.log(title);
  return (
    <section className='poster'>
      {/* <img src={backdropPath} className='backdrop' alt={title} id={id}/> */}
      <h2>{title}</h2>
      {/* <p>{genres}</p>
      <p>Rated {averageRating} PP's</p>
      <p>Released {releaseDate}</p>
      <p>{overview}</p>
      <p>Runtime: {revenue}</p>
      <p>Budget: {budget}</p>
      <p>Revenue: {revenue}</p> */}
      <button className='back-btn'>Back To Search</button>
    </section>
  );  
}


export default Poster;