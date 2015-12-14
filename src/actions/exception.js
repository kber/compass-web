import { createAction } from 'redux-actions';

import { SERVER_ERROR } from '../constants/action-types';

const serverError = createAction(SERVER_ERROR);

export {
  serverError
}
