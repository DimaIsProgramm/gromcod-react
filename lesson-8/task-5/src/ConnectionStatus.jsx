import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: null,
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
      status: false,
    });
  };
  offlineHendler = () => {
    this.setState({
      status: true,
    });
  };
  render() {
    if (!this.state.status) {
      return null;
    }
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
