import React, { Component, PropTypes } from 'react';
import './UserManager.styl';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/UsersActions';

import { UserSearch, UserList, UserAdd } from '../components';

class UserManager extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    let users = this.props.state.users.filter((user) => {
      return user.name.toLowerCase().indexOf(this.props.state.search.toLowerCase()) !== -1;
    });
    
    return (<div className="user-manager">
      <UserSearch onSearch={ this.props.userSearch } />
      <UserList users={ users } onItemDelete={ this.props.userDelete } />
      <UserAdd onUserAdd={ this.props.userAdd } />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state  : state.usermanager
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

UserManager = connect(mapStateToProps, mapDispatchToProps)(UserManager);

export default UserManager;