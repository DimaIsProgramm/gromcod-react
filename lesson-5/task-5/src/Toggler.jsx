import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="toggler">
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Off' : 'On'}</button>
      </div>
    );
  }
}

export default Toggler;
