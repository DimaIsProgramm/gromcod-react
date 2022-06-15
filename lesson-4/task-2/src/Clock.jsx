import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset, currentTime) => {
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.state = {
      currentDate: new Date(),
      offset: props.offset,
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
      currentDate: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.location}</div>
        <div className="clock__time">
          {moment(getTimeWithOffset(this.state.offset, this.state.currentDate)).format('LTS')}
        </div>
      </div>
    );
  }
}

export default Clock;
