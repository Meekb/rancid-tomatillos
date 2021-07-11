const apiCalls = () => {

const allMoviesUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'
const oneMovieUrl = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`

// function getAllMovies() {
//     fetch(allMoviesUrl)
//     .then(this.checkIfError)
//     .then(data => this.setState({movies: data}))
//     .catch(error => console.log('Oops! Something went wrong:', error))
// }

// function checkIfError(response) {
//     if(response.ok) {
//         const currentStatus = response.status
//         this.setState({ error: true })
//         throw new Error(`Uh oh, something went wrong, better luck next time. Error: ${currentStatus}`)
//     } else {
//         return response.json()
//     }

function getOneMovie(id) {
    fetch(oneMovieUrl)
        .then(response => response.json)
        .then(data => this.setState(//{//I think we need a current movie prop in the app constructor for this}))
        // }
    }
}


//I figure we will just put these into the app but didn't want merge conflicts so we can test these in a sec when we're on a call :)


export default apiCalls;


