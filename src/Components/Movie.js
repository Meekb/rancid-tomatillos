import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom';
const Movie = ( {id, title, posterPath} ) => {
    return (
      <div className='each-movie'>
        <Link to={`/movies/${id}`} className='each-movie'>
          <img src={posterPath} className='zoom' alt={title} id={id} />
          <p>{title}</p>
        </Link>
      </div>  
    )
};
export default Movie;
Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};