import React from 'react';
import { connect } from 'react-redux';

import { getUserResult } from 'store/selectors';
import { UpdateSearchFilter, UserSelected } from 'store/actions/users';

import UserList from './UserList';

const styles= {
  wrapper: {
    flex: 1,
    height: '100%',
  }
}

class UserSearch extends React.Component {
  onChangeKeyword = (event) => {
    const keyword = event.target.value;
    this.props.UpdateSearchFilter(keyword);
  }

  onSelect = (user) => {
    this.props.UserSelected(user);
  }

  render() {
    const { results } = this.props;
    return (
      <div style={styles.wrapper}>
        <input type="text" onChange={this.onChangeKeyword} />
        <UserList users={results} onSelect={this.onSelect} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...getUserResult(state)
});

const mapDispatchToProps = { UpdateSearchFilter, UserSelected };

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
