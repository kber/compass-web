import isPromise from '../libs/is-promise';
import { serverError } from '../actions/exception';
import { FETCH } from '../constants/action-types';

export default function({ dispatch }) {
  return next => action => {

    const meta = action.meta;
    if (action.type === FETCH) {
      meta.startActions && meta.startActions.forEach((successAction) => dispatch(successAction({...action})));
    }
    if (isPromise(action.payload)) {
      action.payload.then(
          result => {
          if (action.type === FETCH) {
            meta.successActions && meta.successActions.forEach((successAction) => dispatch(successAction(result)));
          }
        },
          error => {
          if (action.type === FETCH) {
            meta.failedActions && meta.failedActions.forEach((failedAction) => dispatch(failedAction(error)));
            dispatch(serverError(error));
          }
        }
      );
    }

    return next(action);
  };
}
