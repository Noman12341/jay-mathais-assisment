import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('Root component', () => {
  it('should match snapshot', () => {
    const el =   shallow(<Component />);
    expect(el.exists()).toBe(true);
  });
});