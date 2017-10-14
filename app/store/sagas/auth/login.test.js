/* eslint-disable redux-saga/yield-effects */
import { put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import * as actions from 'store/actions/auth';
import login from './login';

describe('login', () => {
  let loginTask;

  beforeEach(() => {
    loginTask = login(actions.loginRequest('user@site.com', 'xxxx'));

    const callDescriptor = loginTask.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch loginSuccess if request was succeeded', () => {
    const res = fromJS({ token: 'yyyy' });
    const putDescriptor = loginTask.next(res).value;
    expect(putDescriptor).toEqual(put(actions.loginSuccess(res)));
  });

  it('should dispatch loginFailure if request was failed', () => {
    const error = new Error();
    const putDescriptor = loginTask.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.loginFailure(error)));
  });
});
