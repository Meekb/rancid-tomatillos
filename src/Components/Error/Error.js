import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <h2> 404 - Not Found!! 🎭</h2>
            <NavLink className='go-back' to='/'>
                Go Back
            </NavLink>
        </div>
    )
}

export default Error