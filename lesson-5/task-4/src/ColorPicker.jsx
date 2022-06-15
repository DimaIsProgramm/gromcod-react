import React, { Component } from 'react';

const RED = "#f00";
const GREEN = '#0f0';
const BLUE = '#00f'

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color
  }

  render() {
    return (
      <div class="colors">
        <button style={{backgroundColor: RED}} className="colors__button" onClick={this.decrement}></button>
        <button style={{backgroundColor: GREEN}} className="colors__button" onClick={this.increment}></button>
        <button style={{backgroundColor: BLUE}} className="colors__button" onClick={this.increment}></button>
      </dBLUE
  }
}

export default Colors;
