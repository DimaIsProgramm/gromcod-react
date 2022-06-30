import React, { useState, useEffect } from 'react';
import './index.scss';
import moment from 'moment';

const getTimeWithOffset = (offset, currentTime) => {
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [currentDate, setData] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setData(new Date());
    };
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [currentDate]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">
        {moment(getTimeWithOffset(offset, currentDate)).format('LTS')}
      </div>
    </div>
  );
};

export default Clock;
