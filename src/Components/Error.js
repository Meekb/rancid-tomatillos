import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = ({ errorType, log } => {
    return (
        <div>
            <h1> { errorType } Level Error</h1>
            {errorType === '500' && <h2> D'oh! Our Server is experiencing issues. Try again soon.</h2>}
            <NavLink to='/'>
            <div>
                {errorType !== '500' && 
                <div>
                <h2>Hmm, something isn't right.</h2>
                <button aria-label="Back to Home">Back to</button>
                </div>
                }
            </div> 
            </NavLink>
        </div>
    )
})

<NavLink to='/'>
        <div className='button'>
          <button aria-label='Back To Search' className='back-btn' >Back To Search</button>
          {console.log(this.state.details)}
        </div>