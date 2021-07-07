import React from 'react';

const Movie = ( {title, posterPath} ) => {
    return (
        <section>
            <p> {title} </p>
            <img src={posterPath}/>
        </section>
    )
}

export default Movie