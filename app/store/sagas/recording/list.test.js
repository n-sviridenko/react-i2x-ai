/* eslint-disable redux-saga/yield-effects */
import { put } from 'redux-saga/effects';
import { Map, List } from 'immutable';

import * as actions from 'store/actions/recording';
import list from './list';

describe('list', () => {
  let listTask;

  beforeEach(() => {
    listTask = list();

    const callDescriptor = listTask.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the listSuccess if request was succeeded', () => {
    const results = List();
    const res = Map({ count: 0, next: null, previous: null, results });
    const putDescriptor = listTask.next(res).value;
    expect(putDescriptor).toEqual(put(actions.listSuccess(results)));
  });

  it('should dispatch the listFail if request was failed', () => {
    const error = new Error();
    const putDescriptor = listTask.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.listFail(error)));
  });
});
