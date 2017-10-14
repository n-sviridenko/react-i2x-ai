import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';

import { authLogin } from 'store/constants/formNames';
import { isRequired } from 'utils/form/validators';
import { TextField } from 'components/ReduxForm';
import FormWrapper from 'components/Common/FormWrapper';
import messages from './messages';

export function LoginForm({ error, handleSubmit }) {
  return (
    <FormWrapper error={error} onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          type="email"
          component={TextField}
          floatingLabelText={<FormattedMessage {...messages.email} />}
          fullWidth
          validate={isRequired}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          component={TextField}
          floatingLabelText={<FormattedMessage {...messages.password} />}
          fullWidth
          validate={isRequired}
        />
      </div>
      <div className="mt-3">
        <RaisedButton type="submit" label={<FormattedMessage {...messages.submit} />} primary />
      </div>
    </FormWrapper>
  );
}

LoginForm.propTypes = {
  error: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: authLogin,
})(LoginForm);
