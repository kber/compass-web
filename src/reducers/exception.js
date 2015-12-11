import { SERVER_ERROR, CLEAN_SERVER_ERROR } from '../actions/exception';

export default (exception = {
  serverError: {message: '', times: 0},
  serverErrors: []
}, action = {}) => {
  switch (action.type) {
    case SERVER_ERROR:
      const payload = action.payload;
      if (!payload.error) {
        return exception;
      } else {
        return Object.assign({}, exception, {
          serverError: {
            message: payload.error,
            times: exception.serverError.times + 1
          }
        })
      }
    default:
      return exception;
  }
}
