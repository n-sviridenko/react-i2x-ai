import isEmpty from 'lodash/isEmpty';

import messages from 'messages/validation';

function createError(type, values) {
  return {
    message: messages[type],
    values,
  };
}

export const isRequired = (value) => isEmpty(value) && !value ? createError('required') : undefined;
