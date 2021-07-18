const fetchMovieCollection = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
    .then(checkForError)
}

const fetchOneMovie = (movieId) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
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
