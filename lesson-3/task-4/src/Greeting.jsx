import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

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

const Greeting = () => {
  return (
    <div className="greeting">
      My name is {formatName(userInfo)}. I'm {currentAge(userInfo.birthDate)} years old.
    </div>
  );
};

export default Greeting;
