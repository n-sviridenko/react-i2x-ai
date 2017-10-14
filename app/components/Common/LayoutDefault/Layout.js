import React from 'react';
import PropTypes from 'prop-types';

import AppBarContainer from 'containers/Common/AppBarContainer';

function Layout({ children }) {
  return (
    <div>
      <div><AppBarContainer /></div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
