import React, { Component, PropTypes } from 'react';
import UserListItem from './UserListItem';
import './UserList.styl'

class UserList extends Component {
  constructor(props) {
    super(props);

    this.eachUser = this.eachUser.bind(this);
  }

  eachUser(user) {
    return <UserListItem key={user.id} id={user.id} name={user.name} onDelete={this.props.onItemDelete} />
  }

  render() {
    let users = this.props.users;

    return (<ul className="user-list">
      { users.map(this.eachUser) }
    </ul>
    );
  }
}

export default UserList;