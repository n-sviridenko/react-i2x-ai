import React from 'react';
import { shallow } from 'enzyme';

import configureStore from 'store';
import AppRoot from './AppRoot';

describe('<AppRoot />', () => {
  it('uses redux Provider', () => {
    const store = configureStore({});
    const messages = {};

    const renderedComponent = shallow(
      <AppRoot store={store} messages={messages}>
        <div>a child</div>
      </AppRoot>
    );

    expect(renderedComponent.find('Provider').length).toEqual(1);
  });
});
