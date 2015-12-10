import { post } from '../libs/fetch';
import { serverError } from './exception';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});
const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error
});

const login = ({accountName, password}) => dispatch => {
  return post('/v1/users/actions/login', {
    accountName,
    password
  }).then(json => dispatch(loginSuccess(json)))
    .catch((error) => {
      dispatch(serverError(error));
      dispatch(loginFailed());
    });
};

export {
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  login
}
