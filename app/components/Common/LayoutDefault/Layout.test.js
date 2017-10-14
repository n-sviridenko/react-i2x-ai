import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('<Layout />', () => {
  it('should render its children', () => {
    const children = <div />;
    const component = shallow(<Layout>{children}</Layout>);
    expect(component.contains(children)).toBe(true);
  });
});
