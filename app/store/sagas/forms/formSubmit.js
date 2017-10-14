import { SubmissionError } from 'redux-form/immutable';
import { take, race, put, call } from 'redux-saga/effects';

export default function* formSubmit({ meta }) {
  const {
    requestAction,
    successActionType,
    failActionType,
    resolve,
    reject,
  } = meta;

  yield put(requestAction);

  const { success } = yield race({
    success: take(successActionType),
    failure: take(failActionType),
  });

  if (success) {
    yield call(resolve, success.payload);
  } else {
    yield call(reject, new SubmissionError());
  }
}
