import isPromise from '../libs/is-promise';

export default callback => {
  return data => {
    const result = callback(data);
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
}
