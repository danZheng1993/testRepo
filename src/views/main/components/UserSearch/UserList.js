import React from 'react';

import User from './User';

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
      <div>
        {users.map(this.renderUser)}
      </div>
    )
  }
}
