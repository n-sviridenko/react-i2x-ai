import { createAction } from 'redux-actions';

export const SET_LOCALE = 'app/global/SET_LOCALE';
export const SET_TOKEN = 'app/global/SET_TOKEN';
export const UNSET_TOKEN = 'app/global/UNSET_TOKEN';

export const setLocale = createAction(SET_LOCALE);
export const setToken = createAction(SET_TOKEN);
export const unsetToken = createAction(UNSET_TOKEN);
