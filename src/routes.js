import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './containers/home';
import Layout from './layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
  </Route>
);
