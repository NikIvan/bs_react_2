import React from 'react';
import './UserSearch.styl';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
      let pattern = this.refs.search.value;
      this.props.onSearch(pattern);
    }

    render() {
        return <div className="user-search">
          <input type="text" placeholder="Search for user" ref="search" value={ this.props.search } onChange={ this.onSearch }/>
        </div>;
    }
}

export default UserSearch;