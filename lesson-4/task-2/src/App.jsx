import React from 'react';
import Clock from './Clock';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const App = () => {
  return (
    <>
      <Clock location={'New York'} />
      <Clock location={'Kyiv'} />
      <Clock location={'London'} offset={getTimeWithOffset(2)} />
    </>
  );
};

export default App;
