import React from 'react';

// in: obj ({OnLogin: callback})
// out: JSX
const Login = props => {
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
