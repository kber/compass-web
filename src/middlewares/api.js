import { isFSA } from 'flux-standard-action';

import isPromise from '../libs/is-promise';
import { serverError } from '../actions/exception';

export default function({ dispatch }) {
  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action)
        ? action.then(dispatch)
        : next(action);
    }

    const meta = action.meta;
    return isPromise(action.payload) ?
      action.payload.then(
          result => {
          if (meta && meta.isAPI) {
            meta.successActions && meta.successActions.forEach((successAction) => dispatch(successAction(result)));
          }
          return dispatch({...action, payload: result})
        },
          error => {
          if (meta && meta.isAPI) {
            meta.failedActions && meta.failedActions.forEach((failedAction) => dispatch(failedAction(error)));
            dispatch(serverError(error));
          }
          return dispatch({...action, payload: error, error: true})
        }
      ) :
      next(action);
  };
}
