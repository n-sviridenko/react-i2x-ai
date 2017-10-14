import { call, put } from 'redux-saga/effects';

import * as actions from 'store/actions/recording';
import sendRequest from 'store/sagas/api/sendRequest';

export default function* list() {
  try {
    const res = yield call(sendRequest, 'get', 'ai/recording/list');

    yield put(actions.listSuccess(res.get('results')));
  } catch (err) {
    yield put(actions.listFail(err));
  }
}
