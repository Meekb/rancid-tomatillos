import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom';

const Movie = ( {id, title, posterPath} ) => {
    return (
      <div className='each-movie'>
        <Link to={`/${id}`} className='each-movie'>
          <img src={posterPath} className='zoom' alt={title} id={id} />
        </Link>
      </div>  
    )
};
export default Movie;
Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};