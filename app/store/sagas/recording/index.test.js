/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects';

import * as actions from 'store/actions/recording';
import { listWatcher } from './index';
import list from './list';

describe('recording', () => {
  describe('listWatcher', () => {
    const listWatcherTask = listWatcher();

    it('should start task to watch for LIST_REQUEST action', () => {
      const takeLatestDescriptor = listWatcherTask.next().value;
      expect(takeLatestDescriptor).toEqual(takeLatest(actions.LIST_REQUEST, list));
    });
  });
});
