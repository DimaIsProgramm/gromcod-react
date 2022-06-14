import React from 'react';
import UserAvatar from './Avatar';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <UserAvatar author={user} avatarUrl={user.avatarUrl} name={user.name} />
      <div className="user-info__name">{user.name}</div>
    </div>
  );
};

export default UserInfo;
