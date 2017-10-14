import { Map } from 'immutable';

import * as actions from './auth';

describe('auth actions', () => {
  describe('loginRequest', () => {
    it('has a type of LOGIN_REQUEST', () => {
      const expected = {
        type: actions.LOGIN_REQUEST,
        payload: Map({
          email: 'user@test.com',
          password: 'xxxx',
        }),
      };
      expect(actions.loginRequest('user@test.com', 'xxxx')).toEqual(expected);
    });
  });

  describe('loginSuccess', () => {
    it('has a type of LOGIN_SUCCESS', () => {
      const res = Map({
        token: 'yyyy',
      });
      const expected = {
        type: actions.LOGIN_SUCCESS,
        payload: res,
      };
      expect(actions.loginSuccess(res)).toEqual(expected);
    });
  });

  describe('loginFailure', () => {
    it('has a type of LOGIN_FAILURE', () => {
      const err = new Error();
      const expected = {
        type: actions.LOGIN_FAILURE,
        payload: err,
        error: true,
      };
      expect(actions.loginFailure(err)).toEqual(expected);
    });
  });
});
