import React from 'react';
import './Movie.css'

const Movie = ( {title, posterPath} ) => {
    return (
        <section className='each-movie'>
            <img src={posterPath} className='zoom'/>
            <p> {title} </p>
            {/* <p>I am movie hear me roar</p> */}
        </section>
    )

}

export default Movie