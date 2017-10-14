import React from 'react';

import { translationMessages } from 'i18n';
import { configureStore, makeMountWithContext } from 'test';
import LocaleToggleContainer from './LocaleToggleContainer';

describe('<LocaleToggleContainer />', () => {
  let store;
  let renderedComponent;

  beforeAll(() => {
    store = configureStore();
    const mount = makeMountWithContext(store, translationMessages);
    renderedComponent = mount(<LocaleToggleContainer />);
  });

  it('should pass the default locale', () => {
    expect(renderedComponent.find('SelectField').prop('value')).toBe('en');
  });
});
