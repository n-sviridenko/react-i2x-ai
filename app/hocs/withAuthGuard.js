import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { getToken } from 'store/reducers/global';
import withWatcher from './withWatcher';

function withAuthGuard(watcherCallback) {
  return function wrapWithGuestGuard(WrappedComponent) {
    // eslint-disable-next-line no-unused-vars
    function GuestGuard({ guardToken, onGuardReplace, ...props }) {
      return <WrappedComponent {...props} />;
    }

    GuestGuard.propTypes = {
      guardToken: PropTypes.string,
      onGuardReplace: PropTypes.func.isRequired,
    };

    const AccessWatcher = withWatcher('guardToken', watcherCallback)(GuestGuard);

    const mapState = createStructuredSelector({
      guardToken: getToken,
    });

    const mapDispatch = (dispatch) => ({
      onGuardReplace: (location) => dispatch(replace(location)),
    });

    return connect(mapState, mapDispatch)(AccessWatcher);
  };
}

export default withAuthGuard;
