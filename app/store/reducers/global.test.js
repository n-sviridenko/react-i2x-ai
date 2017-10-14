import { fromJS } from 'immutable';

import * as actions from 'store/actions/global';
import reducer, * as selectors from './global';

describe('global reducer', () => {
  it('returns the initial state', () => {
    const state = reducer(undefined, {}).toJS();
    const expected = {
      locale: 'en',
      token: null,
    };
    expect(state).toEqual(expected);
  });

  it('changes the locale', () => {
    const state = reducer(undefined, actions.setLocale('de')).toJS();
    const expected = {
      locale: 'de',
      token: null,
    };
    expect(state).toEqual(expected);
  });

  it('changes the token', () => {
    const state = reducer(undefined, actions.setToken('xxxx')).toJS();
    const expected = {
      locale: 'en',
      token: 'xxxx',
    };
    expect(state).toEqual(expected);
  });

  it('resets the token', () => {
    const state = reducer(undefined, actions.unsetToken()).toJS();
    const expected = {
      locale: 'en',
      token: null,
    };
    expect(state).toEqual(expected);
  });

  it('should select the root state', () => {
    const state = fromJS({});
    const globalState = fromJS({ global: state });
    expect(selectors.getRoot(globalState)).toEqual(state);
  });

  it('should select the locale', () => {
    const state = fromJS({ locale: 'en' });
    const globalState = fromJS({ global: state });
    expect(selectors.getLocale(globalState)).toEqual('en');
  });

  it('should select the token', () => {
    const state = fromJS({ token: 'xxxx' });
    const globalState = fromJS({ global: state });
    expect(selectors.getToken(globalState)).toEqual('xxxx');
  });
});
