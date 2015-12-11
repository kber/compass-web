import { SERVER_ERROR, CLEAN_SERVER_ERROR } from '../actions/exception';

export default (exception = {serverError: ''}, action = {}) => {
  switch (action.type) {
    case SERVER_ERROR:
      return Object.assign({}, exception, {serverError: action.payload.error});
    case CLEAN_SERVER_ERROR:
      return Object.assign({}, exception, {serverError: ''});
    default:
      return exception;
  }
}
