import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import profile from './profile';

export default combineReducers({
  router: routerStateReducer,
  profile
});
