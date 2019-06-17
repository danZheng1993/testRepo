import React from 'react';

const styles = {
  wrapper: {
    padding: '8px 16px'
  },
}

export default class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div style={styles.wrapper} onClick={this.props.onClick}>
        {user.username}
      </div>
    )
  }
}