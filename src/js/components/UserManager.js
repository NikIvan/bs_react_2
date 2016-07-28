import React from 'react';
import update from 'react-addons-update';
import UserSearch from './UserSearch';
import UserList from './UserList';
import UserAdd from './UserAdd';
import './UserManager.styl';

class UserManager extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: [
        { name: 'Alex', id: 0 },
        { name: 'Ivan', id: 1 },
        { name: 'Nik', id: 2 }
      ],
      search: ''
    };

    this.addUser = this.addUser.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  addUser(name) {
    let users = this.state.users;
    let user = { name, id };
    let id = users.length ? users[users.length - 1].id + 1 : 0;

    let newState = update(this.state, {
      users: {
        $push: [user]
      }
    });
    
    this.setState(newState);
  }

  searchUser(pattern) {
    this.setState({
      search: pattern
    });
  }

  deleteUser(id) {
    let users = this.state.users.filter((user) => {
      return user.id !== id;
    });

    this.setState({
      users: users
    });
  }

  render() { 
    let users = this.state.users.filter((user) => {
      return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    
    return (<div className="user-manager">
      <UserSearch searchUser={ this.searchUser } pattern={this.state.pattern} />
      <UserList users={ users } deleteUser={ this.deleteUser } />
      <UserAdd addUser={ this.addUser } />
    </div>
    );
  }
}

export default UserManager;