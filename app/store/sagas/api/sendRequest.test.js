/* eslint-disable redux-saga/yield-effects */
import { call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { schema } from 'normalizr';

import request from 'utils/request';
import { merge } from 'store/actions/entities';
import sendRequest from './sendRequest';

jest.mock('config', () => (
  {
    apiBaseUrl: 'http://api.io',
  }
));

describe('sendRequest', () => {
  it('should send "get" request', () => {
    const sendRequestTask = sendRequest('get', 'users', { foo: 'bar' });
    sendRequestTask.next();
    const callEffect = call(request, 'http://api.io/users?foo=bar', { method: 'GET', headers: {} });
    expect(sendRequestTask.next(null).value).toEqual(callEffect);
  });

  it('should send "post" request', () => {
    const sendRequestTask = sendRequest('post', 'users', { foo: 'bar' });
    sendRequestTask.next();
    const callEffect = call(
      request,
      'http://api.io/users',
      { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{"foo":"bar"}' },
    );
    expect(sendRequestTask.next(null).value).toEqual(callEffect);
  });

  it('should send FormData', () => {
    const formData = new FormData();
    const sendRequestTask = sendRequest('post', 'users', formData);
    sendRequestTask.next();
    const callEffect = call(request, 'http://api.io/users', { method: 'POST', headers: {}, body: formData });
    expect(sendRequestTask.next(null).value).toEqual(callEffect);
  });

  it('should return immutable response', () => {
    const sendRequestTask = sendRequest('get', 'users');
    sendRequestTask.next();
    expect(sendRequestTask.next(null).value).toMatchSnapshot();
    const returnDescriptor = sendRequestTask.next({});
    expect(returnDescriptor.value).toEqual(fromJS({}));
    expect(returnDescriptor.done).toBe(true);
  });

  it('should return normalize response if schema is specified', () => {
    const responseSchema = new schema.Entity('user');
    const sendRequestTask = sendRequest('get', 'users/1', null, responseSchema);
    sendRequestTask.next();
    expect(sendRequestTask.next(null).value).toMatchSnapshot();
    const user = { id: 1, name: 'Sam' };
    const entities = fromJS({ user: { 1: user } });
    const mergeDescriptor = sendRequestTask.next(user);
    expect(mergeDescriptor.value).toEqual(put(merge(entities)));
    const returnDescriptor = sendRequestTask.next();
    expect(returnDescriptor.value).toBe(1);
    expect(returnDescriptor.done).toBe(true);
  });

  it('should send the authorization header', () => {
    const sendRequestTask = sendRequest('get', 'users', { foo: 'bar' });
    sendRequestTask.next();
    const options = { method: 'GET', headers: { authorization: 'xxxx' } };
    const callEffect = call(request, 'http://api.io/users?foo=bar', options);
    expect(sendRequestTask.next('xxxx').value).toEqual(callEffect);
  });
});
