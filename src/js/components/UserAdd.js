import React from 'react';

class UserAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.onUserAdd = this.onUserAdd.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(e) {
    if(e.keyCode === 13) {
      this.refs.userAddForm.submit(this.onUserAdd);
    }
    
    return;
  }

  onUserAdd(e) {
    e.preventDefault();
    let input = this.refs.name;
    let name = input.value.trim();
    
    if(name) {
      this.props.addUser(name);
      input.value = '';
    }
  }
  
  render() {
    return (<form className="user-add" ref="userAddForm" onSubmit={ this.onUserAdd }>
      <input type="text" placeholder="Enter user name" onKeyUp={this.onKeyUp} ref="name"/>
      <button type="submit" onClick={this.addUser} >Add</button>
    </form>
    );
  }
}

export default UserAdd;