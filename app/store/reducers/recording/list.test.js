import { fromJS, List } from 'immutable';

import { listRequest, listSuccess, listFail } from 'store/actions/recording';
import reducer, { getRoot } from './list';

describe('wishlist list reducer', () => {
  it('returns the initial state', () => {
    const state = reducer(undefined, {}).toJS();
    const expected = { loading: false, error: null, data: null };
    expect(state).toEqual(expected);
  });

  it('should react on list request', () => {
    const state = reducer(undefined, listRequest()).toJS();
    const expected = { loading: true, error: null, data: [] };
    expect(state).toEqual(expected);
  });

  it('should react on list success', () => {
    const state = reducer(undefined, listSuccess(List())).toJS();
    const expected = { loading: false, error: null, data: [] };
    expect(state).toEqual(expected);
  });

  it('should react on list error', () => {
    const error = new Error();
    const state = reducer(undefined, listFail(error)).toJS();
    const expected = { loading: false, error, data: null };
    expect(state).toEqual(expected);
  });

  it('should select the root state', () => {
    const globalState = fromJS({
      recording: {
        list: {
          data: [],
        },
      },
    });
    expect(getRoot(globalState).toJS()).toEqual({ data: [] });
  });
});
