import isPromise from '../libs/is-promise';

const submitWithAction = (action) => {
  return (data, dispatch) => {
    const result = dispatch(action(data));
    if (result && isPromise(result)) {
      return result.then(({type, payload, meta, error}) => {
        if (error) {
          let object = {};
          payload.errors.forEach((fieldError) => {
            object[fieldError.field] = fieldError.message;
          });
          throw object;
        }
      });
    }
  };
};

export {
  submitWithAction
}
