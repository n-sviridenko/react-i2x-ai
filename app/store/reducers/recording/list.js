import { List } from 'immutable';

import loaderCreator from 'store/reducers/creators/loaderCreator';
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAIL } from 'store/actions/recording';

export default loaderCreator({
  types: [
    LIST_REQUEST,
    LIST_SUCCESS,
    LIST_FAIL,
  ],
  requestPayloadMapper: () => List(),
});

const getRoot = (state) => state.getIn(['recording', 'list']);

export {
  getRoot,
};
