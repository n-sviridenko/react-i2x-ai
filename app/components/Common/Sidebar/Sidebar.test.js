import React from 'react';
import { shallow } from 'enzyme';

import LocaleToggleContainer from 'containers/LocaleToggleContainer';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('should render locale toggle', () => {
    const component = shallow(<Sidebar />);
    expect(component.find(LocaleToggleContainer).exists()).toBe(true);
  });
});
