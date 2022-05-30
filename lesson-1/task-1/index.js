// should render following html

// <h1 class="title">Todo List</h1>

const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElem, rootElement);
