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

const login = (accountName, password) => dispatch => {
  return fetch(`${API_BASE_URL}/v1/users/actions/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accountName,
      password
    })
  }).then(response => response.json())
    .then(json => dispatch(loginSuccess(json)))
    .catch(json => dispatch(loginFailed(json)));
};

export {
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  login
}
