import React from 'react';

const handleLogout = () => {
  this.setState({
    isLoggedIn: true,
  });
};

const Logout = () => {
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
