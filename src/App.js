import React, { Component } from 'react';
import { swSearch, retrieveResults, iterator } from './services/swservices';

import TestComp from './components/testcomp';
import SWForm from './components/swform';
import PlanetBox from './components/planetbox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', stockPlanets: ['Coruscant', 'Tatooine', 'Kamino']};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch() {
    retrieveResults();
  }

  render() {
    return (
      <div className="top-container">
        <h1>Search for a Planet</h1>
        <SWForm handleChange={this.handleChange} handleSearch={this.handleSearch} value={this.state.value}/>
        <div className="planet-list-container">
          {this.state.stockPlanets.map(function(name, index){
            return <PlanetBox key={index} planetName={name}/>;
          })}
         </div>
      </div>
    );
  }
}

export default App;
