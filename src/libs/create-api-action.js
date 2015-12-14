import { createAction } from 'redux-actions';

export default (type, actionCreator, metaCreator) => {
  const apiMarkup = {
    isAPI: true
  };
  return createAction(type, actionCreator, metaCreator ?
    (...args) => Object.assign({}, metaCreator(args), apiMarkup) :
    () => apiMarkup);
}
