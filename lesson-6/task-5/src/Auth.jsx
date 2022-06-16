import React from 'react';
import Status from './Status';

class Auth extends React.Component {
  render() {
    return (
      <div className="status">
        <Status isOnline={true}></Status>
      </div>
    );
  }
}

export default Auth;
