import { UPDATE_NAME } from '../actions/profile';

export default (profile = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, profile, action.payload);
    default:
      return profile;
  }
}
