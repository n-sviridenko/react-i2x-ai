import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';

import { unsetToken } from 'store/actions/global';
import { getToken } from 'store/reducers/global';
import AppBar from 'components/Common/AppBar';

const mapStateToProps = createStructuredSelector({
  token: getToken,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(push('/login')),
  onLogout: () => dispatch(unsetToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
