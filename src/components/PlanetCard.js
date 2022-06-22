import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testeid="planet-card">
        <p data-testeid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.element.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
