import React from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <Login />;
    } else {
      button = <Logout />;
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
