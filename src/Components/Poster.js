import React from 'react';
import './Poster.css';
const Poster = ( {details, closePoster, formatRating, formatReleaseDate} ) => {
  let rating = details.average_rating;
  let releaseDate = details.release_date;
  return (
    <section   
      className='poster' style={{
      backgroundImage: `url(${details.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      size: 'cover'
    }}>
      <img src={details.poster_path} className='cover-image' alt={details.title} id={details.id}/>
      <div className='poster-container'>
      <h2 className='poster-title'> {details.title} </h2>
      <h3> {details.tagline} </h3>
      {/* <p>{genres}</p> */}
      {/* <p>Rated {formatRating(rating)} PP's</p> */}
      <p>Released {formatReleaseDate(releaseDate)}</p>
      <p>{details.overview}</p>
      <p>Runtime: {details.runtime} minutes </p>
      <p>Budget: ${details.budget}</p>
      <p>Revenue: ${details.revenue}</p>
      <button aria-label='Back To Search' className='back-btn' onClick={closePoster} >Back To Search</button>
      </div>  
    </section>
  );  
}
export default Poster;