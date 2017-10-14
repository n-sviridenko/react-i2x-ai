import { takeLatest, takeEvery } from 'redux-saga/effects';

import * as actions from 'store/actions/auth';
import { REQUEST_FAIL } from 'store/actions/api';
import forceLogout from './forceLogout';
import login from './login';
import logged from './logged';

export function* forceLogoutWatcher() {
  yield takeEvery((action) => action.type === REQUEST_FAIL && action.payload.response.status === 401, forceLogout);
}

export function* loginWatcher() {
  yield takeLatest(actions.LOGIN_REQUEST, login);
}

export function* loggedWatcher() {
  yield takeLatest(actions.LOGIN_SUCCESS, logged);
}

export default [
  forceLogoutWatcher,
  loginWatcher,
  loggedWatcher,
];
