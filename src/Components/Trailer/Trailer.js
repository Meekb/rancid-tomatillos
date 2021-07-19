import React from 'react';
import './Trailer.css';
import PropTypes from 'prop-types';

const Trailer = ({trailer}) => {
  const key = trailer.key;
  return (
  <div className='trailer-container'>
    <iframe 
      src={`https://www.youtube.com/embed/${key}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded Youtube'
    />
  </div>
  );
}

Trailer.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Trailer;