import {
  listRequest,
  listSuccess,
  listFail,
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAIL,
} from './recording';

describe('wishlist actions', () => {
  describe('listRequest', () => {
    it('has a type of LIST_REQUEST', () => {
      const expected = { type: LIST_REQUEST };
      expect(listRequest()).toEqual(expected);
    });
  });

  describe('listSuccess', () => {
    it('has a type of LIST_SUCCESS', () => {
      const expected = { type: LIST_SUCCESS, payload: [] };
      expect(listSuccess([])).toEqual(expected);
    });
  });

  describe('listFail', () => {
    it('has a type of LIST_FAIL', () => {
      const error = new Error();
      const expected = { type: LIST_FAIL, payload: error, error: true };
      expect(listFail(error)).toEqual(expected);
    });
  });
});
