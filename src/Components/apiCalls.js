const fetchMovieCollection = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
    .then(data => data.json())
    .then(checkForError)
    // .catch(this.checkForError)
}

const fetchOneMovie = (movieId) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(data => data.json())
    .then(checkForError)
}


const checkForError = (response) => {
  if (response.ok) {
   return response.json()
  } else {
    throw new Error('Sorry, your request did not go through')
  }
};



export { fetchMovieCollection, fetchOneMovie }
