import React, { Component } from 'react';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      offset: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.offset.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
