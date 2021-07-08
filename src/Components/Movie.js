import React from 'react';
import './Movie.css'

const Movie = ( {title, posterPath, displayMovie} ) => {
    return (
        <section className='each-movie' onClick={(e) => displayMovie(e)} >
            <img src={posterPath} className='zoom' alt={title} />
            <p> {title} </p>
            {/* <p>I am movie hear me roar</p> */}  
        </section>
    )

}

export default Movie