import React from 'react'
import update from 'react-addons-update';
import UserManager from './components/UserManager'
import './App.styl'

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <UserManager />
      </div>
    );
  }
}

export default App