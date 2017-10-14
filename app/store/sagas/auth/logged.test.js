/* eslint-disable redux-saga/yield-effects */
import { put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import * as actions from 'store/actions/auth';
import * as globalActions from 'store/actions/global';
import logged from './logged';

describe('logged', () => {
  let loggedTask;

  beforeEach(() => {
    const res = fromJS({ token: 'yyyy' });
    loggedTask = logged(actions.loginSuccess(res));

    const dateDescriptor = loggedTask.next().value;
    expect(dateDescriptor).toMatchSnapshot();
    const ifDescriptor = loggedTask.next(new Date(2011, 1, 11, 0, 45, 15)).value;
    expect(ifDescriptor).toMatchSnapshot();
  });

  it('should dispatch setToken if the token is valid', () => {
    const putDescriptor = loggedTask.next(true).value;
    expect(putDescriptor).toEqual(put(globalActions.setToken('yyyy')));
  });

  it('should not dispatch setToken if the token is invalid', () => {
    const isDone = loggedTask.next(false).done;
    expect(isDone).toBe(true);
  });
});
