import { createAction } from 'redux-actions';

export const REQUEST_FAIL = 'app/api/REQUEST_FAIL';

export const requestFail = createAction(REQUEST_FAIL);
