import React from 'react';

import List from 'components/Recording/List';
import LoadingOverlay from 'components/Common/LoadingOverlay';
import { withPreloader } from 'hocs';

export default withPreloader(
  () => null,
  (data, { onListRequest }) => onListRequest(),
  { overlayBuilder: (props) => <LoadingOverlay {...props} /> },
)(List);
