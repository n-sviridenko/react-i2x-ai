import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { FormattedMessage } from 'react-intl';

import { appLocales } from 'i18n';
import messages from './messages';

class LocaleToggle extends React.PureComponent {
  onLocaleToggle = (event, index, value) => {
    this.props.setLocale(value);
  };

  render() {
    return (
      <SelectField
        floatingLabelText={<FormattedMessage {...messages.locale} />}
        value={this.props.locale}
        onChange={this.onLocaleToggle}
        fullWidth
      >
        {appLocales.map((locale) => (
          <MenuItem key={locale} value={locale} primaryText={<FormattedMessage {...messages[locale]} />} />
        ))}
      </SelectField>
    );
  }
}

LocaleToggle.propTypes = {
  setLocale: React.PropTypes.func,
  locale: React.PropTypes.string,
};

export default LocaleToggle;
