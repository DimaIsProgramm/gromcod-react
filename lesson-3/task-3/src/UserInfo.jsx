import React from 'react';
import UserAvatar from './Avatar';

const UserInfo = props => {
  return (
    <div className="user-info">
      <UserAvatar user={props.user} />
      <div className="user-info__name">{props.user}</div>
    </div>
  );
};

export default UserInfo;
