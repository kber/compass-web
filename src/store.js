import api from './middlewares/api';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

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
    applyMiddleware(api, createLogger())
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
    applyMiddleware(api)
  )(createStore)(reducers);
}

export default store
