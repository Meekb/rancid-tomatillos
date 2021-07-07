import React from 'react';
import './Movie.css'

const Movie = ( {title, posterPath} ) => {
    return (
        <section>
            <img src={posterPath}/>
            <p> {title} </p>
            {/* <p>I am movie hear me roar</p> */}
        </section>
    )
}

export default Movie