import React from 'react';
import './Poster.css';
import Trailer from '../Trailer/Trailer';
import { NavLink } from 'react-router-dom';
import {fetchOneMovie, fetchVideos} from '../apiCalls'

class Poster extends React.Component {
  constructor({ movieId }) {
    super()
    this.state = {
      id: movieId,
      details: {},
      moviePoster: false,
      trailer: {},
      error: ''
    }
  }

  componentDidMount() {
    fetchOneMovie(this.state.id)
    .then(singleMovie => {
      this.setState({
        details: singleMovie.movie,
        moviePoster: true })
    })
    .catch((error) => this.setState({error: `${error}`})) 

    fetchVideos(this.state.id)
    .then(videos => {
      this.setState({
        trailer: videos.videos[0] })
    })
    .catch((error) => this.setState({error: `${error}`}))
  }

  convertNumForDisplay = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  formatRating = (rating) => {
    const fixedRating = rating.toFixed(2);
    return fixedRating
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
      backgroundImage: `url(${backdrop})`,
      backgroundRepeat: 'no-repeat center center fixed',
      background: 'cover',
    }
    return style
  }

  displayGenres = (genreArr) => {
    const allGenres = genreArr.map(genre => genre + " ");
    return allGenres; 
  }

  render() {
    console.log(this.state)
    const { backdrop_path, poster_path, id, title, average_rating, release_date, tagline, overview, genres, runtime, revenue, budget, } = this.state.details
    if (this.state.details.title) {
    return (
      <section> 
        {!this.state.details && !this.state.error &&
          <h2 className='loadpage'>Loading movie...🍿</h2>
        }
        {!this.state.error && this.state.details && 
          <div style={this.styleBackground(backdrop_path)} className='each-movie'>
            <Trailer  trailer={this.state.trailer} />
              <img src={poster_path} className='cover-image zoom' alt={title} id={id}/>
              <div className='poster-container'>
              <div className='title-tag'>
                 <h2 className='poster-title'> {title} </h2>
                 <p className='tagline'> {tagline} </p>
               </div>
               <div className='details'>
                 <p className='genre'>Genres: {!genres ? "unavailable" : this.displayGenres(genres)}</p>
                 <p className='rating'>Avg Rating: {this.formatRating(average_rating)} Putridities</p>
                 <p className='released'>Released {this.formatReleaseDate(release_date)}</p>
                 <p className='overview'> {!overview ? "No overview for this movie!" : overview} </p>
                 <p className='runtime'>Runtime: {runtime} minutes </p>
                 <p className='budget'>Budget: {!budget ? "unavailable" : `$${this.convertNumForDisplay(budget)}`}</p>
                 <p className='revenue'>Revenue: {!revenue ? "unavailable" : `$${this.convertNumForDisplay(revenue)}`}</p>
               </div>
        <div className='button'>
        <NavLink to='/'>
          <button aria-label='Back To Search' className='back-btn' >Back To Search</button>
          {console.log(this.state.details)}
        </NavLink>
        </div>
          </div>
          </div>
        }
      </section>
    )
  }
  return null
}

}

export default Poster;
