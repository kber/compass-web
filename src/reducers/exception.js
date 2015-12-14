import { handleActions } from 'redux-actions';

import { SERVER_ERROR } from '../constants/action-types';

export default handleActions({
  [SERVER_ERROR]: (exception, action) => {
    const error = action.payload.error;
    if (!error) {
      return exception;
    }
    return Object.assign({}, exception, {
      serverError: {
        message: error,
        times: exception.serverError.times + 1
      }
    })
  }
}, {
  serverError: {message: '', times: 0},
  serverErrors: []
});
