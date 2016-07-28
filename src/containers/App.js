import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.styl'

import UserManager from './UserManager'
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component {  
  render() {
    return (
      <div>
        <Provider store={ store }>
          <UserManager />
        </Provider>
      </div>
    );
  }
}

export default App