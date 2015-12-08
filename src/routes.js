import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import Home from './containers/home';
import Profile from './containers/profile';
import Layout from './layout';

export default (
  <ReduxRouter>
    <Route component={Layout}>
      <Route path="/home" component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
      <IndexRoute component={Home}/>
    </Route>
  </ReduxRouter>
);
