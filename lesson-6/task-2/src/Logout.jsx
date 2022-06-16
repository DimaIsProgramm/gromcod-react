import React from 'react';
import './index.scss';

const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
