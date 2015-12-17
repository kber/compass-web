import { createAction } from 'redux-actions';

import { SERVER_ERROR, HIDE_SERVER_ERROR } from '../constants/action-types';

export const serverError = createAction(SERVER_ERROR);
export const hideServerError = createAction(HIDE_SERVER_ERROR);
