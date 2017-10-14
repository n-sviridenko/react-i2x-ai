import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

import { defaultLocale } from 'config';
import { SET_LOCALE, SET_TOKEN, UNSET_TOKEN } from 'store/actions/global';

const initialState = fromJS({
  locale: defaultLocale,
  token: null,
});

export default handleActions({
  [SET_LOCALE]: (state, { payload }) => state.set('locale', payload),
  [SET_TOKEN]: (state, { payload }) => state.set('token', payload),
  [UNSET_TOKEN]: (state) => state.set('token', null),
}, initialState);

export const getRoot = (state) => state.get('global');
export const getLocale = createSelector(getRoot, (state) => state.get('locale'));
export const getToken = createSelector(getRoot, (state) => state.get('token'));
