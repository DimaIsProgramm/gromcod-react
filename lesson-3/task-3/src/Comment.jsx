import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment({ author, date, text }) {
  return (
    <div className="comment">
      <UserInfo author={author} />
      <div className="comment__text">{text}</div>
      <div className="comment__date">{formatDate(date)}</div>
    </div>
  );
}

export default Comment;
