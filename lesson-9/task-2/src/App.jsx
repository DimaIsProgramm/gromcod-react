import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  createUser(user) {
    console.log(user);
  }
  render() {
    return <UserForm onSubmit={() => this.props.createUser(user)} />;
  }
}

export default App;
