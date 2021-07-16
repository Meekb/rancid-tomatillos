import React from 'react';
import './Poster.css';
import { NavLink } from 'react-router-dom';
import {fetchOneMovie} from './apiCalls'

class Poster extends React.Component {
  constructor({ movieId }) {
    super()
    this.state = {
      id: movieId,
      details: '',
      moviePoster: false,
      error: ''
      
    }
  }

  componentDidMount() {
    fetchOneMovie(this.state.id)
    .then(singleMovie => {
      this.setState({details: singleMovie.movie })
    })
    .catch((error) => this.setState({error: `${error}`}))
  }

  formatRating = (rating) => {
    rating = rating.toFixed(2);
    return rating
  }

  formatReleaseDate = (date) => {
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    const year = date.split('-')[0];  
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  styleBackground = (backdrop) => {
    const style = {
              backgroundImage: `url(${details.backdrop_path})`,
              backgroundRepeat: 'no-repeat',
              size: 'cover'
    }
  }

  render() {
    const { backdrop_path, poster_path, id, title, average_rating, release_date, tagline, overview, genres, runtime }
    return (
      <section>
        {!this.state.details && !this.state.error &&
          <h2 className='loadpage'>Loading moving...🍿</h2>
        }
        {!this.state.error && this.state.details}
      </section>
    )
  }

}

// const Poster = ( {details, closePoster, convertNumForDisplay, displayGenres, formatRating, formatReleaseDate} ) => {
//   let rating = details.average_rating;
//   let releaseDate = details.release_date;
//   let budget = details.budget;
//   let revenue = details.revenue;
//   return (
//     <section   
//       className='poster' style={{
//       backgroundImage: `url(${details.backdrop_path})`,
//       backgroundRepeat: 'no-repeat',
//       size: 'cover'
//     }}>
//       <img src={details.poster_path} className='cover-image' alt={details.title} id={details.id}/>
//       <div className='poster-container'>
//       <div className='title-tag'>
//         <h2 className='poster-title'> {details.title} </h2>
//         <p className='tagline'> {details.tagline} </p>
//       </div>
//       <div className='details'>
//         <p className='genre'>Genres: {!details.genres ? "unavailable" : displayGenres(details.genres)}</p>
//         <p className='rating'>Avg Rating: {formatRating(rating)} Putridities</p>
//         <p className='released'>Released {formatReleaseDate(releaseDate)}</p>
//         <p className='overview'> {!details.overview ? "No overview for this movie!" : details.overview} </p>
//         <p className='runtime'>Runtime: {details.runtime} minutes </p>
//         <p className='budget'>Budget: {!details.budget ? "unavailable" : `$${convertNumForDisplay(budget)}`}</p>
//         <p className='revenue'>Revenue: {!details.revenue ? "unavailable" : `$${convertNumForDisplay(revenue)}`}</p>
//       </div>

//       <NavLink to='/'>
//       <div className='button'>
//         <button aria-label='Back To Search' className='back-btn' onClick={closePoster} >Back To Search</button>
//       </div>
//       </NavLink>
//       </div>  
//     </section>
//   );  
// }
// export default Poster;