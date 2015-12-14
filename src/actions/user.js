import { createAction } from 'redux-actions';

import { login as loginAPI } from '../libs/api';
import { serverError } from './exception';
import { FETCH, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/action-types';

const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailed = createAction(LOGIN_FAILED);
const loginStart = createAction(LOGIN_START);
const login = createAction(FETCH, loginAPI, () => ({
  startActions: [loginStart],
  successActions: [loginSuccess],
  failedActions: [loginFailed]
}));

export {
  login
}
