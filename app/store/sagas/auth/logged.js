import { put, call } from 'redux-saga/effects';

import * as jwt from 'utils/jwt';
import * as actions from 'store/actions/global';

function* logged({ payload }) {
  const token = payload.get('token');
  const time = yield call(Date.now);

  if (yield call(jwt.isValid, token, time)) {
    yield put(actions.setToken(token));
  }
}

export default logged;
