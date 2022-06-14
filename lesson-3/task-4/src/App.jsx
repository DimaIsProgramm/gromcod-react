import React from 'react';
import Greeting from './Greeting';

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2001-01-01T11:11:11.819Z'),
};

const App = () => {
  return <Greeting user={userInfo} date={new Date('2019-01-01T11:32:19.566Z')} />;
};

export default App;
