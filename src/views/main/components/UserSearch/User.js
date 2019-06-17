import React from 'react';

export default class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div onClick={this.props.onClick}>
        {user.username}
      </div>
    )
  }
}