const SERVER_ERROR = 'SERVER_ERROR';
const CLEAN_SERVER_ERROR = 'CLEAN_SERVER_ERROR';

const serverError = (error) => ({
  type: SERVER_ERROR,
  payload: error
});

const cleanServerError = () => ({
  type: CLEAN_SERVER_ERROR
});

export {
  SERVER_ERROR,
  CLEAN_SERVER_ERROR,

  serverError,
  cleanServerError
}
