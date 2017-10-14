import React from 'react';
import { shallow } from 'enzyme';

import LocaleToggle from './LocaleToggle';

describe('<LocaleToggle />', () => {
  it('should dispatch changeLocale when called', () => {
    const setLocaleMock = jest.fn();
    const renderedComponent = shallow(<LocaleToggle setLocale={setLocaleMock} />);
    const locale = 'de';

    renderedComponent.find('SelectField').prop('onChange')(null, null, locale);
    expect(setLocaleMock).toHaveBeenCalledWith(locale);
  });
});
