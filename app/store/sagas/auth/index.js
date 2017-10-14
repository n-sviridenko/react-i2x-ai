import { takeLatest } from 'redux-saga/effects';

import * as actions from 'store/actions/auth';
import login from './login';
import logged from './logged';

export function* loginWatcher() {
  yield takeLatest(actions.LOGIN_REQUEST, login);
}

export function* loggedWatcher() {
  yield takeLatest(actions.LOGIN_SUCCESS, logged);
}

export default [
  loginWatcher,
  loggedWatcher,
];
