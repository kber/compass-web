import { createAction } from 'redux-actions';

import { login as loginAPI } from '../libs/api';
import { serverError } from './exception';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailed = createAction(LOGIN_FAILED);

const login = ({ accountName, password }) => dispatch => {
  return loginAPI({
    accountName,
    password
  }).then(json => {
    dispatch(loginSuccess(json));
    return json;
  }).catch(error => {
    dispatch(serverError(error));
    dispatch(loginFailed());
    throw error;
  });
};

export {
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  login
}
