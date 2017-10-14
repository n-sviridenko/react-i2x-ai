import React from 'react';
import PropTypes from 'prop-types';
import ToggleStarIcon from 'material-ui/svg-icons/toggle/star';
import ToggleStarBorderIcon from 'material-ui/svg-icons/toggle/star-border';
import range from 'lodash/range';

function Rating({ min, max, value }) {
  return (
    <span>
      {range(min, max + 1).map((step) => (
        <span key={step}>{step <= value ? <ToggleStarIcon /> : <ToggleStarBorderIcon />}</span>
      ))}
    </span>
  );
}

Rating.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  min: 1,
  max: 5,
};

export default Rating;
