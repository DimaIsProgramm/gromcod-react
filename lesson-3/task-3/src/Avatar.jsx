import React from 'react';

const UserAvatar = ({ avatarUrl, name }) => {
  return <img className="avatar" src={avatarUrl} alt={name} />;
};

export default UserAvatar;
