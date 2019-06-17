import React from 'react';

const styles= {
  wrapper: {
    flex: 4,
    height: '100%',
  }
}

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>PhotoGrid</div>
    )
  }
}