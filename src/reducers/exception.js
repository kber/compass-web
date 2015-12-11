import { SERVER_ERROR, CLEAN_SERVER_ERROR } from '../actions/exception';

export default (exception = {
  serverError: {message: '', times: 0},
  serverErrors: []
}, action = {}) => {
  switch (action.type) {
    case SERVER_ERROR:
      const payload = action.payload;
      let newException = {
        serverErrors: payload.errors || []
      };
      if (payload.error) {
        newException.serverError = {
          message: payload.error,
          times: exception.serverError.times + 1
        };
      }
      return Object.assign({}, exception, newException);
    default:
      return exception;
  }
}
