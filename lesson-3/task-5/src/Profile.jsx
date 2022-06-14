import React from 'react';
import moment from 'moment';

const Profile = ({ userData }) => {
  return (
    <div className="greeting">
      <span className="profile__name">
        {userData.firstName} {userData.lastName}.
      </span>
      <span className="profile__birth">
        Was born {moment(userData.birthDate).format('DD MMM YY')} in {userData.birthPlace}
      </span>
    </div>
  );
};

export default Profile;
