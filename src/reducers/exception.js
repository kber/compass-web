import { SERVER_ERROR, CLEAN_SERVER_ERROR } from '../actions/exception';

export default (exception = {serverError: {message: '', times: 0}}, action = {}) => {
  switch (action.type) {
    case SERVER_ERROR:
      return Object.assign({}, exception, {
        serverError: {
          message: action.payload.error,
          times: exception.serverError.times + 1
        }
      });
    default:
      return exception;
  }
}
