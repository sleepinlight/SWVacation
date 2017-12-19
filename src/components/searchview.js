import React, { Component } from 'react';
import TestComp from './testcomp';
import SWForm from './swform';
import PlanetBox from './planetbox';

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      stockPlanets: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSearch() {
    let swInput = document.getElementById('swsearchbar').value;
    let component = this;
    function swSearchb(swQuery) {
      fetch('https://swapi.co/api/planets/?search=' + swQuery, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          let tempArray = [];
          let tempObj = {};
          data.results.forEach(function(item) {
            tempObj = {};
            tempObj['name'] = item['name'];
            tempObj['climate'] = item['climate'];
            tempObj['population'] = item['population'];
            tempObj['terrain'] = item['terrain'];
            if(tempObj.climate === "arid") {
              tempObj['color'] = '#c54403';
            } else {
              tempObj['color'] = '#8da9d1';
            }
            //console.log(tempArray);
            tempArray.push(tempObj);
          });

          component.setState({ stockPlanets: tempArray });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    swSearchb(swInput);
  }

  render() {
    return (
      <div className="top-container">
        <h1>Search By Planet</h1>
        <SWForm
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          value={this.state.value}
        />
        <div className="planet-list-container">
          {this.state.stockPlanets.map(function(planet, index) {
            return (
              <PlanetBox
                key={index}
                planetName={planet.name}
                planetClimate={planet.climate}
                planetPopulation={planet.population}
                planetTerrain={planet.terrain}
                planetColor={planet.color}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchView;
