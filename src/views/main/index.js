import React from 'react';

import { UserSearch, PhotoGrid, Footer } from './components';

const styles = {
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'stretch',
  }
}

export default class MainView extends React.Component {
  render() {
    return (
      <div style={styles.mainWrapper}>
        <div style={styles.contentWrapper}>
          <UserSearch />
          <PhotoGrid />
        </div>
        <Footer />
      </div>
    )
  }
}