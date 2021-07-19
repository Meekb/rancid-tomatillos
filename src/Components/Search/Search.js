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

    handleChange = e => {
        e.preventDefault()
        this.setState({ userSearch: ''})
        this.setState({userSearch: e.target})
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

    submit = (e) => {
        e.preventDefault();
        this.findMovies()
    }

    render() {
        return (
       <form submit={this.submit}>
           <input
           type='text'
           placeholder='Search titles'
           id='search'
           name='search'
           value={this.state.userSearch}
           onChange={this.handleChange}
           />

       </form> 
        )
    }
}

export default Search