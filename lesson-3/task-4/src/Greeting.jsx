import React from 'react';
import moment from 'moment';

// const age = date => {
//   let currentAge = moment(date).fromNow().split(' ').splice(0, 2).join(' ');

//   return currentAge;
// };

function currentAge(birthDate) {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let dobnow = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  let age;

  age = today.getFullYear() - birthDate.getFullYear();

  if (today < dobnow) {
    age = age - 1;
  }

  return age;
}

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2001-01-01T11:11:11.819Z'),
};

const Greeting = ({ firstName, lastName, birthDate }) => {
  return (
    <div className="greeting" user={userInfo}>
      My name is {userInfo.firstName} {userInfo.lastName}. I'm {currentAge(userInfo.birthDate)}{' '}
      years old
    </div>
  );
};

export default Greeting;
