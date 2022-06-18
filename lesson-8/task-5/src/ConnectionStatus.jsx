import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onlineHendler);
    window.addEventListener('offline', this.offlineHendler);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineHendler);
    window.removeEventListener('offline', this.offlineHendler);
  }

  onlineHendler = () => {
    this.setState({
      status: 'online',
    });
  };
  offlineHendler = () => {
    this.setState({
      status: 'offline',
    });
  };
  render() {
    if (this.state.status === 'offline') {
      return <div className="status status_offline">{this.state.status}</div>;
    }
    return <div className="status ">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
