const ServerError = (message) => {
  this.message = message;
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw response;
  }
};

const post = (url, body) => {
  return fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(checkStatus);
};

export { post }
