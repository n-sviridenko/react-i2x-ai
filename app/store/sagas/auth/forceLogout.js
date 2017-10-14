import { select, put } from 'redux-saga/effects';

import { getToken } from 'store/reducers/global';
import { unsetToken } from 'store/actions/global';

export default function* forceLogout() {
  const token = yield select(getToken);

  // in case if user was authenticated
  if (token !== null) {
    yield put(unsetToken());
  }
}
