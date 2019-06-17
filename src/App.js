import React from 'react';
import { Provider } from 'react-redux';

import MainView from 'views/main';

import store from 'store';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
