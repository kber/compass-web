import { handleActions } from 'redux-actions';

import { LOGIN } from '../constants/action-types';

const defaultValue = {
  isLogin: false,
  id: null
};

export default handleActions({
  [LOGIN]: (currentUser, action) => {
    if (action.error) {
      return defaultValue;
    }
    return {
      isLogin: true,
      id: action.payload.id
    };
  }
}, defaultValue);
