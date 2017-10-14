import { setLocale, SET_LOCALE, setToken, SET_TOKEN, unsetToken, UNSET_TOKEN } from './global';

describe('global actions', () => {
  describe('setLocale', () => {
    it('has a type of SET_LOCALE', () => {
      const expected = {
        type: SET_LOCALE,
        payload: 'de',
      };
      expect(setLocale('de')).toEqual(expected);
    });
  });

  describe('setToken', () => {
    it('has a type of SET_TOKEN', () => {
      const expected = {
        type: SET_TOKEN,
        payload: 'xxxx',
      };
      expect(setToken('xxxx')).toEqual(expected);
    });
  });

  describe('unsetToken', () => {
    it('has a type of UNSET_TOKEN', () => {
      const expected = {
        type: UNSET_TOKEN,
      };
      expect(unsetToken()).toEqual(expected);
    });
  });
});
