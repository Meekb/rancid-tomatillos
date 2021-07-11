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

// class Movie extends React.Component {
//     handleClick = () => {
//         this.props.displayPoster(this.props.id)
//     }

//     render() {
//         return (
//         <div onClick={this.handleClick}>
//             <img src={this.props.poster} className='zoom' alt={this.props.title} />
//             <h2>{this.props.title}</h2>
//         </div>
//         )
//     }
// }

export default Movie

Movie.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string
};
