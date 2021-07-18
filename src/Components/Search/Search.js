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
}

export default Search