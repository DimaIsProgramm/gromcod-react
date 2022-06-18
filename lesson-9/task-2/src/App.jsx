import React from 'react';
import UserForm from './UserForm';

const App = ({ onSubmit }) => {
  return <UserForm onSubmit={onSubmit} />;
};

export default App;
