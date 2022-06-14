import React from 'react';
import moment from 'moment';

const age = date => {
  let currentAge = moment(date).fromNow().split(' ').splice(0, 1).join(' ');

  return currentAge;
};

// function currentAge(birthDate) {
//   let now = new Date();
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   let dobnow = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
//   let age;

//   age = today.getFullYear() - birthDate.getFullYear();

//   if (today < dobnow) {
//     age = age - 1;
//   }

//   return age;
// }

const Greeting = ({ firstName, lastName, birthDate }) => {
  return (
    <div className="greeting">
      My name is {firstName} {lastName}. I'm {age(birthDate)} years old
    </div>
  );
};

export default Greeting;
