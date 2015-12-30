import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router'

import store from './store';
import routes from './routes';
import './index.scss';
import './base.scss';

const history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
