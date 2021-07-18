import React from 'react';
import './Trailer.css';
import PropTypes from 'prop-types';

const Trailer = ({}) => {
  <div className='trailer-container'>
    <iframe 
      width='250px'
      height='175px'
      src={`https://www.youtube.com/embed/`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded Youtube'
    />

  </div>
}

Trailer.PropTypes = {
  embedId: PropTypes.string.isRequired
};

export default Trailer;