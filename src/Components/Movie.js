import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

const Movie = ( {id, title, posterPath, displayPoster} ) => {
    return (
        <section className='each-movie' >
            <img src={posterPath} className='zoom' alt={title} id={id} onClick={(e) => displayPoster(e)} />
            <h2>{title}</h2>
        </section>
    )

}

export default Movie

Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};
