import { post } from '../libs/fetch';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});
const loginFailed = payload => ({
  type: LOGIN_FAILED,
  payload
});

const login = ({accountName, password}) => dispatch => {
  return post('/v1/users/actions/login', {
    accountName,
    password
  }).then(json => dispatch(loginSuccess(json)))
    .catch(error => dispatch(loginFailed(error)));
};

export {
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  login
}
