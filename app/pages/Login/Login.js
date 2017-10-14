import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Common/LayoutDefault';
import Container from 'components/Common/ContainerNarrow';
import LoginForm from 'containers/Auth/LoginForm';
import messages from './messages';

function Login({ onSubmit }) {
  return (
    <Layout>
      <Container>
        <h1><FormattedMessage {...messages.header} /></h1>
        <LoginForm onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
