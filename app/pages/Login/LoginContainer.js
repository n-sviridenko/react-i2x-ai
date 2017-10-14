import React from 'react';

import { buildSubmit } from 'store/actions/forms';
import { loginRequest, LOGIN_SUCCESS, LOGIN_FAILURE } from 'store/actions/auth';
import Login from './Login';

const handleSubmit = buildSubmit(loginRequest, LOGIN_SUCCESS, LOGIN_FAILURE);

export default function LoginContainer() {
  return <Login onSubmit={handleSubmit} />;
}
