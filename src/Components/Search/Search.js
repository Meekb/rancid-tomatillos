import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            userSearch: '',
            // searchResult: this.props.movies 
        }
    }

    handleChange = e => {
        // e.preventDefault()
        // this.setState({ userSearch: ''})
        // const { input } = e.target.value.toLowerCase()
        this.setState({userSearch: e.target.value})
    }

    // searchInput = e => {
    //     this.setState({userSearch: e.target.value.toLowerCase()})
    // }

    clear = () => {
        this.setState({userSearch: ''})
    }

 

    submitQuery = (e) => {
        e.preventDefault();
        console.log(this.state.userSearch)
        this.props.findMovies(this.state.userSearch)
    }

    render() {
        return (
       <form>
           <input
           type='text'
           placeholder='Search titles'
           id='search'
           name='search'
           value={this.state.userSearch}
           onChange={e => this.handleChange(e)}
           />
           <button type='submit' onClick={this.submitQuery}>Search</button>
       </form> 
        )
    }
}

export default Search