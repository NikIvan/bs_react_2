import React from 'react';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);

        this.searchUser = this.searchUser.bind(this);
    }

    searchUser() {
      let pattern = this.refs.search.value;
      this.props.searchUser(pattern);
    }

    render() {
        return <div className="user-search">
          <input type="text" placeholder="Search for user" ref="search" value={ this.props.pattern } onChange={ this.searchUser }/>
        </div>;
    }
}

export default UserSearch;