import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { NavLink } from 'react-router-dom';

const Movie = ( {id, title, posterPath, displayPoster} ) => {

    return (
    <NavLink to={`/movies/:${id}`} className='each-movie'>
      <div className='each-movie'>
          <img src={posterPath} className='zoom' alt={title} id={id} onClick={(e) => displayPoster(e)} />
          <p>{title}</p>
      </div>  
    </NavLink>
    )
};

export default Movie;

Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};
