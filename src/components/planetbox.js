import React, { Component } from 'react';

class PlanetBox extends React.Component {
  render() {
    return (
      <div className="planetbox">
        <div className="round-planet"></div>
        <div className="planet-details">
          <h3 className="planet-title">{this.props.planetName}</h3>
          <h4>Climate: {this.props.climate}</h4>
          <h4>Population: {this.props.population}</h4>

        </div>
      </div>
    );
  }
}

export default PlanetBox;
