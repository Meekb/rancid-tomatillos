import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            userSearch: '',
            searchResult: this.props.movies 
        }
    }

    searchInput = e => {
        this.setState({userSearch: e.target.value.toLowerCase()})
    }

    clear = () => {
        this.setState({userSearch: ''})
    }

    findMovies = () => {
        let foundMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.userSearch))
        this.setState({searchResult: foundMovies})
        
    }
}

export default Search