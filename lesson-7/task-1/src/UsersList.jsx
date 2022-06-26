import React from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// currentPage

class UsersList extends React.Component {
  state = {
    curPage: 3,
  };

  itemPerPage = 3;

  prevBtnHandler = () => {
    this.setState({
      curPage: this.state.curPage - 1,
    });
  };
  nextBtnHandler = () => {
    this.setState({
      curPage: this.state.curPage + 1,
    });
  };

  render() {
    const users = this.props.users;
    const startIndex = (this.state.curPage - 1) * this.itemPerPage;
    const endIndex = startIndex + this.itemPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          curPage={this.state.curPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemPerPage={this.itemPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
