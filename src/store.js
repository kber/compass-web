import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

import fetch from './middlewares/fetch';
import reducers from './reducers';
import routes from './routes';

let store;

if (__DEVELOPMENT__) {
  const createLogger = require('redux-logger').default;
  store = compose(
    reduxReactRouter({
      routes,
      createHistory
    }),
    applyMiddleware(fetch, promise, createLogger())
  )(createStore)(reducers);

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      store.replaceReducer(require('./reducers/index'));
    });
  }
} else {
  store = compose(
    reduxReactRouter({
      routes,
      createHistory
    }),
    applyMiddleware(fetch, promise)
  )(createStore)(reducers);
}

export default store
