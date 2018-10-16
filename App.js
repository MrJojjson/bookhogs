import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import store from './src/reducers';

import Navigation from './src/components/navigation';

const defaultStore = createStore(
  store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={defaultStore}>
        <Navigation />
      </Provider>
    );
  }
}
