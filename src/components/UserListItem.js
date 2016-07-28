import React from 'react';
import './UserListItem.styl';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    console.log('Removing user');
    this.props.onDelete(this.props.id);
  }

  render() {
    return (<li className="user-list-item">
      <div className="name">{this.props.name}</div>
      <button className="btn-delete" onClick={ this.onDelete }><i className="fa fa-times"></i></button>
    </li>
    );
  }
}

export default UserListItem;