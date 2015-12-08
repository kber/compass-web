import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
