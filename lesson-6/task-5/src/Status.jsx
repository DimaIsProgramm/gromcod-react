import React from 'react';
import Offline from './Offline';
import Online from './Online';

const Status = ({ isOnline }) => {
  if (isOnline) {
    return <Online></Online>;
  }
  return <Offline></Offline>;
};

export default Status;
