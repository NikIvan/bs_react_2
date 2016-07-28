import React from 'react';
import './UserListItem.styl';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    console.log('Removing user');
    this.props.deleteUser(this.props.id);
  }

  render() {
    return (<li className="user-list-item">
      <div className="name">{this.props.name}</div>
      <button className="btn-delete" onClick={ this.deleteUser }><i className="fa fa-times"></i></button>
    </li>
    );
  }
}

export default UserListItem;