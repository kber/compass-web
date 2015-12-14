import createAPIAction from '../libs/create-api-action';

import { login as loginAPI } from '../libs/api';
import { LOGIN } from '../constants/action-types';

const login = createAPIAction(LOGIN, loginAPI);

export {
  login
}
