import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';

const mountNode = document.getElementById('app');

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state += 1;
    case 'DECREMENT':
      return state -= 1;
    default:
      return state;
  }
}


const store = createStore(reducer);

ReactDOM.render(<App />, mountNode);

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

document.addEventListener('mousemove', () => {
  store.dispatch({ type: 'DECREMENT' });
});



