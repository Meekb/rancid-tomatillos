import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { NavLink } from 'react-router-dom';

const Movie = ( {id, title, posterPath, displayPoster} ) => {
    return (
        <div className='each-movie'>
        <NavLink to={`/movies/${id}`}className='each-movie'>
          <img src={posterPath} className='zoom' alt={title} id={id} onClick={(e) => displayPoster(e)} />
        </NavLink>
      </div>
    )

}


export default Movie

Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};
