import React from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends React.Component {
  state = {
    isOnline: true,
  };

  render() {
    return (
      <div className="status">{this.state.isOnline ? <Online></Online> : <Offline></Offline>}</div>
    );
  }
}

export default Status;
