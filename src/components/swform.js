import React, { Component } from 'react';

class SWForm extends React.Component {
  render() {
    return (
      <div className="searchbar-container">
        <form id="swsearch">
          <input
            type="text"
            id="swsearchbar"
            value=""
            onChange={this.props.handleChange}
            value={this.props.value}
          />
          <div className="buttonsw">
            <button
              type="button"
              id="swsubmit"
              onClick={this.props.handleSearch}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SWForm;
