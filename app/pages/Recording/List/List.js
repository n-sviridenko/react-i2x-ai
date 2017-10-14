import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Common/LayoutDefault';
import Container from 'components/Common/ContainerDefault';
import ListContainer from 'containers/Recording/ListContainer';
import messages from './messages';

function List() {
  return (
    <Layout>
      <Container>
        <h1><FormattedMessage {...messages.header} /></h1>
        <ListContainer />
      </Container>
    </Layout>
  );
}

export default List;
