import React from 'react';

import User from './User';

const wrapperStyle = {
  flex: 1,
  overflowY: 'scroll',
}

export default class UserList extends React.Component {
  onSelect = (user) => () => {
    this.props.onSelect(user);
  }
  renderUser = (user) => (
    <User user={user} onClick={this.onSelect(user)} key={`user_${user.id}`}/>
  )
  render() {
    const { users } = this.props;
    return (
      <div style={wrapperStyle}>
        {users.map(this.renderUser)}
      </div>
    )
  }
}
