import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: true,
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
      status: true,
    });
  };
  offlineHendler = () => {
    this.setState({
      status: false,
    });
  };
  render() {
    if (this.state.status) {
      return null;
    }
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
