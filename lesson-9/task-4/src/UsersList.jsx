import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value, count } = this.state;
    const users = this.props.users;
    let filteredUsers;
    if (value === '') {
      filteredUsers = users.map(user => <User key={user.id} name={user.name} age={user.age} />);
    }
    if (value) {
      let upperCaseValue = value.toUpperCase();
      filteredUsers = users
        .filter(user => user.name.includes(upperCaseValue) || user.name.includes(value))
        .map(user => <User key={user.id} name={user.name} age={user.age} />);
    }
    return (
      <div>
        <Filter
          value={value}
          totalItems={users.length}
          onChange={this.handleChange}
          count={filteredUsers.length}
        />
        <ul>{filteredUsers}</ul>
      </div>
    );
  }
}

export default UsersList;

// algo
// 1.static DOM
// 2. make class or fn components
// 3. props and states
// 4. fn component create user (props: name, age)
// 5. fn component create filter (props: text, count, callback)
// 6. class compoent usersList (state: text, count; one handler)
// 7. filter array
// 8. draw array
// 9. gather all in index.jsx
