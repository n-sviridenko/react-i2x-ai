/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects';

import * as actions from 'store/actions/auth';
import { loginWatcher, loggedWatcher } from './index';
import login from './login';
import logged from './logged';

describe('auth', () => {
  describe('loginWatcher', () => {
    const loginWatcherTask = loginWatcher();

    it('should start task to watch for LOGIN_REQUEST action', () => {
      const takeLatestDescriptor = loginWatcherTask.next().value;
      expect(takeLatestDescriptor).toEqual(takeLatest(actions.LOGIN_REQUEST, login));
    });
  });

  describe('loggedWatcher', () => {
    const loggedWatcherTask = loggedWatcher();

    it('should start task to watch for LOGIN_SUCCESS action', () => {
      const takeLatestDescriptor = loggedWatcherTask.next().value;
      expect(takeLatestDescriptor).toEqual(takeLatest(actions.LOGIN_SUCCESS, logged));
    });
  });
});
