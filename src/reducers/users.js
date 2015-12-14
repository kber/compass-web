import { handleActions } from 'redux-actions';

import { LOGIN_SUCCESS } from '../constants/action-types';

export default handleActions({
  [LOGIN_SUCCESS]: (users, action) => {
    const currentUser = action.payload;
    return users.filter(user => user.id !== currentUser.id).concat(currentUser);
  }
}, []);
