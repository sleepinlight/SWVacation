import React, { Component } from 'react';

class SWForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch();
  }

  render() {
    return (
      <div className="searchbar-container">
        <form id="swsearch" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="swsearchbar"
            value=""
            onChange={this.props.handleChange}
            value={this.props.value}
          />
          <div className="buttonsw">
            <input
              type="submit"
              value="Submit"
              id="swsubmit"

            />

          </div>
        </form>
      </div>
    );
  }
}

export default SWForm;
