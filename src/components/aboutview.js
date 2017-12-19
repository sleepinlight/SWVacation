import React, { Component } from 'react';

class AboutView extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>Star Wars Vacation</h1>
          <div className="about-text">
            <p>This app was created using <a href="https://swapi.co/">The Star Wars API (SWAPI)</a> and built mainly as a learning experiment, but also with great love for all things Star Wars.</p>
          </div>
      </div>
    );
  }
}

export default AboutView;
