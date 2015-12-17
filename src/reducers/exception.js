import { handleActions } from 'redux-actions';

import { SERVER_ERROR, HIDE_SERVER_ERROR } from '../constants/action-types';

export default handleActions({
  [SERVER_ERROR]: (exception, action) => {
    const error = action.payload.error || action.payload.message;
    if (!error) {
      return exception;
    }
    return Object.assign({}, exception, {
      serverError: {
        message: error,
        visible: true
      }
    })
  },
  [HIDE_SERVER_ERROR]: (exception, action) => Object.assign({}, exception, {
    serverError: {
      message: '',
      visible: false
    }
  })
}, {
  serverError: {message: '', times: 0},
  serverErrors: []
});
