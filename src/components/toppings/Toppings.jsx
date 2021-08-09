import React from 'react';
import PropTypes from 'prop-types';

const Topping = ({ name, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name}/>
    </>
  );
};

Topping.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Topping;
