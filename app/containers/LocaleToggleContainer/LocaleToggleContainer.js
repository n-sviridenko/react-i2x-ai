import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setLocale } from 'store/actions/global';
import { getLocale } from 'store/reducers/global';
import LocaleToggle from 'components/Common/LocaleToggle';

const mapStateToProps = createStructuredSelector({
  locale: getLocale,
});

const mapDispatchToProps = {
  setLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
