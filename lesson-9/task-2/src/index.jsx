import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const user = {
  name: 'tom',
  age: 17,
};

const rootElement = document.querySelector('#root');

ReactDOM.render(<App user={user} />, rootElement);
