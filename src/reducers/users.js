import { LOGIN_SUCCESS } from '../actions/user';

export default (users = [], action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const currentUser = action.payload;
      return users.filter(user => user.id !== currentUser.id).concat(currentUser);
    default:
      return users;
  }
}
