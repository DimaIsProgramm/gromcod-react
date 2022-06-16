import React from 'react';

handleLogin = () => {
  this.setState({
    isLoggedIn: true,
  });
};

const Login = () => {
  return <button onClick={this.handleLogin}>Login</button>;
};

export default Login;
