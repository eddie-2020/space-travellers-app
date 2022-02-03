import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket: { name, image, description } } = props;
  return (
    <div className="rocket-detailed-container">
      <div className="img-details">
        <img alt="rocket( Falcon )" className="img-spaceX" src={image} />
      </div>
      <div className="rocket-description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
