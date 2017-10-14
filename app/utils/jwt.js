import jwt from 'jwt-simple';
import isObject from 'lodash/isObject';
import isAfter from 'date-fns/is_after';

export function decode(token) {
  let payload = null;

  try {
    payload = jwt.decode(token, null, true);
  } catch (e) {} // eslint-disable-line no-empty

  return payload;
}

export function isValid(token, now) {
  const payload = decode(token);

  return (
    isObject(payload) &&
    payload.userId &&
    payload.exp &&
    isAfter(payload.exp * 1000, now)
  );
}
