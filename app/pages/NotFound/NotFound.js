import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Common/LayoutDefault';
import Container from 'components/Common/ContainerDefault';
import messages from './messages';

export default function NotFound() {
  return (
    <Layout>
      <Container>
        <h1><FormattedMessage {...messages.header} /></h1>
      </Container>
    </Layout>
  );
}
