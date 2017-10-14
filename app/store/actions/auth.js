import { createAction } from 'redux-actions';
import { Map } from 'immutable';

export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'app/auth/LOGIN_FAILURE';

export const loginRequest = createAction(LOGIN_REQUEST, (email, password) => Map({ email, password }));
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
