import React from 'react';
import Clock from './Clock';
import moment from 'moment';

const getTimeWithOffset = (offset, currentTime) => {
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const App = () => {
  return (
    <>
      <Clock
        location={'New York'}
        // offset={moment(getTimeWithOffset(1, this.state.offset).format('LTS')}
      />
      <Clock location={'Kyiv'} />
      <Clock location={'London'} />
    </>
  );
};

export default App;
