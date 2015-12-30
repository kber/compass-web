import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';

import users from './users';
import currentUser from './current-user';
import exception from './exception';

export default combineReducers({
  routing: routeReducer,
  form: formReducer,
  exception,
  currentUser,
  users
});
