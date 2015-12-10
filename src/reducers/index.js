import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

import users from './users';
import currentUser from './current-user';

export default combineReducers({
  router: routerStateReducer,
  form: formReducer,
  currentUser,
  users
});
