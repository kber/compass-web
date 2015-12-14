import isPromise from '../libs/is-promise';

const submitWithAction = (action) => {
  return (data, dispath) => {
    const newAction = dispath(action(data));
    if (newAction && isPromise(newAction)) {
      return newAction.then(({type, payload, meta, error}) => {
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
