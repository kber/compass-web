import { createAction } from 'redux-actions';

const SERVER_ERROR = 'SERVER_ERROR';

const serverError = createAction(SERVER_ERROR);

export {
  SERVER_ERROR,

  serverError
}
