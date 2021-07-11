import React from 'react';
import './Poster.css';

const Poster = (props) => {

  return (
    <section className='poster' style={{
      backgroundImage: `url(${props.backdropPath})`,
      backgroundRepeat: 'no-repeat',
      size: 'cover'
    }}>
      {/* <img src={backdropPath} className='backdrop' alt={title} id={id}/> */}
      <div className='poster-container'>
      <h2 className='poster-title'>{props.title}</h2>
      <h3>{props.tagline}</h3>
      <p>{props.genres}</p>
      <p>Rated {props.formatRating(props.averageRating)} PP's</p>
      <p>Released {props.formatReleaseDate(props.releaseDate)}</p>
      <p>{props.overview}</p>
      <p>Runtime: {props.revenue}</p>
      <p>Budget: {props.budget}</p>
      <p>Revenue: {props.revenue}</p>
      <button className='back-btn' onClick={props.closePoster} >Back To Search</button>
      </div>
    </section>
  );  
}


export default Poster;