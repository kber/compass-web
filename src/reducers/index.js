import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import profile from './profile';
import users from './users';
import currentUser from './current-user';

export default combineReducers({
  router: routerStateReducer,
  currentUser,
  profile,
  users
});
