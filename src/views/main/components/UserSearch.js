import React from 'react';
import { connect } from 'react-redux';

const styles= {
  wrapper: {
    flex: 1,
    height: '100%',
  }
}

export default class UserSearch extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <input type="text" />
      </div>
    )
  }
}
