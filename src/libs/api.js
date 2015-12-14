import { serverError } from '../actions/exception';

const post = async (url, body) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const responseJSON = await response.json();
  if (response.status >= 200 && response.status < 300) {
    return responseJSON;
  } else {
    throw responseJSON;
  }
};

const login = async ({ accountName, password }) => {
  return await post('/v1/users/actions/login', {
    accountName,
    password
  });
};

export { login }
