import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import BaseAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import messages from './messages';

function AppBar({ token, onLogin, onLogout }) {
  return (
    <BaseAppBar
      title={<FormattedMessage {...messages.header} />}
      iconElementRight={<FlatButton label={<FormattedMessage {...token ? messages.logout : messages.login} />} />}
      onRightIconButtonTouchTap={token ? onLogout : onLogin}
    />
  );
}

AppBar.propTypes = {
  token: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default AppBar;
