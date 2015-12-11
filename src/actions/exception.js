const SERVER_ERROR = 'SERVER_ERROR';

const serverError = (error) => ({
  type: SERVER_ERROR,
  payload: error
});

export {
  SERVER_ERROR,

  serverError
}
