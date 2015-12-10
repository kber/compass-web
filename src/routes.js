import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import Home from './containers/home';
import Profile from './containers/profile';
import Layout from './layout';
import Login from './containers/login';

export default (
  <ReduxRouter>
    <Route path="/" component={Layout}>
      <Route path="home" component={Home}></Route>
      <Route path="profile" component={Profile}></Route>
      <Route path="login" component={Login}></Route>
      <IndexRoute component={Home}/>
    </Route>
  </ReduxRouter>
);
