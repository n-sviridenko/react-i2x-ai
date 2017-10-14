import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col col-sm-4">
          {children}
        </div>
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
