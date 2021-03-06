import { createAction } from 'redux-actions';

export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'app/auth/LOGIN_FAILURE';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
