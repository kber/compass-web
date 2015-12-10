import { LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/user';

export default (currentUser = {isLogin: false, id: null}, action = {}) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return {isLogin: false, id: null};
    case LOGIN_SUCCESS:
      return {isLogin: true, id: action.payload.id};
    default:
      return currentUser;
  }
}
