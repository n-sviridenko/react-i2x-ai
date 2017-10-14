import { takeEvery } from 'redux-saga/effects';

import { SUBMIT } from 'store/actions/forms';
import formSubmit from './formSubmit';

export function* formSubmitWatcher() {
  yield takeEvery(SUBMIT, formSubmit);
}

export default [
  formSubmitWatcher,
];
