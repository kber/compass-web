import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';

import fetch from './middlewares/fetch';
import reducers from './reducers';

let store;

if (__DEVELOPMENT__) {
  const createLogger = require('redux-logger').default;
  store = compose(
    applyMiddleware(fetch, promise, createLogger())
  )(createStore)(reducers);

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      store.replaceReducer(require('./reducers/index'));
    });
  }
} else {
  store = compose(
    applyMiddleware(fetch, promise)
  )(createStore)(reducers);
}

export default store
