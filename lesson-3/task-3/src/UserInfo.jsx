import React from 'react';
import UserAvatar from './Avatar';

const UserInfo = props => {
  const { avatarUrl, name } = props.author;
  return (
    <div className="user-info">
      <UserAvatar author={avatarUrl} name={name} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
};

export default UserInfo;
