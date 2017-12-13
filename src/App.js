import React, { Component } from 'react';
import {
  swSearch,
  retrieveResults,
  iterator,
  planetator
} from './services/swservices';

import TestComp from './components/testcomp';
import SWForm from './components/swform';
import PlanetBox from './components/planetbox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      stockPlanets: [
        { name: 'Coruscant', climate: '', population: '' },
        { name: 'Tatooine', climate: '', population: '' },
        { name: 'Kamino', climate: '', population: '' }
      ]
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
            tempArray.push(tempObj);
          });

          component.setState({ stockPlanets: tempArray });
        })
        .catch(function(err) {
          err = 'errrr!';
          console.log(err);
        });
    }
    swSearchb(swInput);
  }

  render() {
    return (
      <div className="top-container">
        <h1>Search for a Planet</h1>
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
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
