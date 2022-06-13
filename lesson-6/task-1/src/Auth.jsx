import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  render() {
    return (
      <>
        <Spinner></Spinner>
        <Login></Login>
        <Logout></Logout>
      </>
    );
  }
}

export default Auth;
