import { createAction } from 'redux-actions';

import { login as loginAPI } from '../libs/api';
import { serverError } from './exception';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN = 'LOGIN';

const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailed = createAction(LOGIN_FAILED);
const login = createAction(LOGIN, loginAPI, () => ({
  isAPI: true,
  successActions: [loginSuccess],
  failedActions: [loginFailed]
}));

export {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN,

  loginSuccess,
  loginFailed,
  login
}
