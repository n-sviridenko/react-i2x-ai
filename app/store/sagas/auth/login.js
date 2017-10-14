import { put, call } from 'redux-saga/effects';

import sendRequest from 'store/sagas/api/sendRequest';
import * as actions from 'store/actions/auth';

export default function* login({ payload }) {
  const data = {
    email: payload.get('email'),
    password: payload.get('password'),
  };

  try {
    const res = yield call(sendRequest, 'POST', 'core/login', data);

    yield put(actions.loginSuccess(res));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}
