import qs from 'qs';
import { fromJS } from 'immutable';
import { normalize } from 'normalizr';
import { call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
import { merge } from 'store/actions/entities';
import { requestFail } from 'store/actions/api';
import { getToken } from 'store/reducers/global';
import { apiBaseUrl, apiAuthHeaderPrefix } from 'config';

export default function* sendRequest(method, endpoint, data = null, responseSchema = null, options = {}) {
  const headers = { ...options.headers };
  const finalMethod = method.toUpperCase();
  const token = yield select(getToken);

  if (token) {
    headers.authorization = apiAuthHeaderPrefix ? `${apiAuthHeaderPrefix} ${token}` : token;
  }

  let url = `${apiBaseUrl}/${endpoint}/`;
  let body;

  if (['GET', 'HEAD'].indexOf(finalMethod) !== -1) {
    const query = qs.stringify(data);

    if (query !== '') {
      url = `${url}?${query}`;
    }
  } else if (data instanceof FormData) {
    body = data;
  } else if (data) {
    headers['content-type'] = 'application/json';
    body = JSON.stringify(data);
  }

  let response;

  try {
    response = yield call(request, url, { ...options, method: finalMethod, headers, body });
  } catch (err) {
    yield put(requestFail(err));

    throw err;
  }

  if (responseSchema === null) {
    return fromJS(response);
  }

  const { result, entities } = normalize(response, responseSchema);

  yield put(merge(fromJS(entities)));

  return fromJS(result);
}
