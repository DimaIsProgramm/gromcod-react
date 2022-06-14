import React from 'react';

function Greeting({ firstName, lastName, birthDate }) {
  console.log(props);
  return (
    <div className="greeting">
      `My name is{firstName}
      {lastName}. I'm {birthDate}
    </div>
  );
}

export default Greeting;
