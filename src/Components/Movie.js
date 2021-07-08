import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

const Movie = ( {id, title, posterPath, displayMovie} ) => {
    return (
        <section className='each-movie' >
            <img src={posterPath} className='zoom' alt={title} id={id} onClick={(e) => displayMovie(e)} />
            <p> {title} </p>
            {/* <p>I am movie hear me roar</p> */}  
        </section>
    )

}

export default Movie

Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};
