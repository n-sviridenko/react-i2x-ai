import { createAction } from 'redux-actions';

export const LIST_REQUEST = 'app/recording/LIST_REQUEST';
export const LIST_SUCCESS = 'app/recording/LIST_SUCCESS';
export const LIST_FAIL = 'app/recording/LIST_FAIL';

export const listRequest = createAction(LIST_REQUEST);
export const listSuccess = createAction(LIST_SUCCESS);
export const listFail = createAction(LIST_FAIL);
