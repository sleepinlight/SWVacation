import React, { Component } from 'react';
import ReactRouter, { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  swSearch,
  retrieveResults,
  iterator,
  planetator
} from './services/swservices';
import Nav from './components/nav';
import HomeView from './components/homeview';
import SearchView from './components/searchview';
import AboutView from './components/aboutview';
import TestComp from './components/testcomp';
import SWForm from './components/swform';
import PlanetBox from './components/planetbox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={HomeView} />
          <Route path="/search" component={SearchView} />
          <Route path="/about" component={AboutView} />
        </div>
      </Router>
    );
  }
}

export default App;
