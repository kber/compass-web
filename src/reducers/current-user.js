import { handleActions } from 'redux-actions';

import { LOGIN_FAILED, LOGIN_SUCCESS } from '../constants/action-types';

export default handleActions({
  [LOGIN_FAILED]: () => ({isLogin: false, id: null}),
  [LOGIN_SUCCESS]: (currentUser, action) => ({isLogin: true, id: action.payload.id})
}, {isLogin: false, id: null});
