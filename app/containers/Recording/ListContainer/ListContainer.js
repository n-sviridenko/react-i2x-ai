import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getRoot } from 'store/reducers/recording/list';
import { listRequest } from 'store/actions/recording';
import ListPreloader from './ListPreloader';

const mapState = createStructuredSelector({
  loader: getRoot,
});

const mapDispatch = (dispatch) => ({
  onListRequest: () => dispatch(listRequest()),
});

export default connect(mapState, mapDispatch)(ListPreloader);
