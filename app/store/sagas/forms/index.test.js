/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';

import { SUBMIT } from 'store/actions/forms';
import { formSubmitWatcher } from './index';
import formSubmit from './formSubmit';

describe('forms', () => {
  describe('formSubmitWatcher', () => {
    const formSubmitWatcherSaga = formSubmitWatcher();

    it('should start task to watch for SUBMIT action', () => {
      const takeLatestDescriptor = formSubmitWatcherSaga.next().value;
      expect(takeLatestDescriptor).toEqual(takeEvery(SUBMIT, formSubmit));
    });
  });
});
