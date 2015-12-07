const UPDATE_NAME = 'UPDATE_NAME';

const updateName = name => ({
  type: UPDATE_NAME,
  payload: {
    name
  }
});

export {
  UPDATE_NAME,

  updateName
}
