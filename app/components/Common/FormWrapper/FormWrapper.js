import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'components/Common/Alert';

function FormWrapper({ error, children, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {error && <Alert type="danger" text={error} />}
      {children}
    </form>
  );
}

FormWrapper.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormWrapper;
