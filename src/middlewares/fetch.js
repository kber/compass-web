import isPromise from '../libs/is-promise';
import { serverError } from '../actions/exception';
import { FETCH } from '../constants/action-types';

export default function({ dispatch }) {
  return next => action => {
    const meta = action.meta;
    if (meta && meta.isAPI && isPromise(action.payload)) {
      action.payload.catch(error => dispatch(serverError(error)));
    }

    return next(action);
  };
}
