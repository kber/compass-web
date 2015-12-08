import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

import reducers from './reducers';
import routes from './routes';

let store;

if (__DEVELOPMENT__) {
  const createLogger = require('redux-logger').default;
  store = compose(
    applyMiddleware(thunk, createLogger()),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(reducers);

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      store.replaceReducer(require('./reducers/index'));
    });
  }
} else {
  store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(reducers);
}

export default store
