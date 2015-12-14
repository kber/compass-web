import { createAction } from 'redux-actions';

import { login as loginAPI } from '../libs/api';
import { serverError } from './exception';
import { FETCH } from '../constants/action-types';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_START = 'LOGIN_START';

const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailed = createAction(LOGIN_FAILED);
const loginStart = createAction(LOGIN_START);
const login = createAction(FETCH, loginAPI, () => ({
  startActions: [loginStart],
  successActions: [loginSuccess],
  failedActions: [loginFailed]
}));

export {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_START,

  login
}
