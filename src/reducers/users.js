import { handleActions } from 'redux-actions';

import { LOGIN } from '../constants/action-types';

export default handleActions({
  [LOGIN]: (users, action) => {
    if (action.error) {
      return users;
    }
    const currentUser = action.payload;
    return users.filter(user => user.id !== currentUser.id).concat(currentUser);
  }
}, []);
