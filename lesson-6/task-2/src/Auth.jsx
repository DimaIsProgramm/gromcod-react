import React from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';
import './index.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.handleLogout}></Logout>;
    } else {
      button = <Login onLogin={this.handleLogin}></Login>;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
