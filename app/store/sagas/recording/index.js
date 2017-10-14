import { takeLatest } from 'redux-saga/effects';

import * as actions from 'store/actions/recording';
import list from './list';

export function* listWatcher() {
  yield takeLatest(actions.LIST_REQUEST, list);
}

export default [
  listWatcher,
];
