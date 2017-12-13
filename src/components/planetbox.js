import React, { Component } from 'react';

class PlanetBox extends React.Component {
  render() {

    return (
      <div className="planetbox">
        <div className="round-planet" style={{backgroundColor: this.props.planetColor}}/>
        <div className="planet-details">
          <h3 className="planet-title">
            {this.props.planetName}
          </h3>
          <h4>
            Climate: {this.props.planetClimate}
          </h4>
          <h4>
            Terrain: {this.props.planetTerrain}
          </h4>
          <h4>
            Population: {this.props.planetPopulation}
          </h4>
        </div>
      </div>
    );
  }
}

export default PlanetBox;
