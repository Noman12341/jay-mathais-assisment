import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from './index';

describe('Root component', () => {
  it('should match snapshot', () => {
    const el =   shallow(<Component />);
    expect(el.exists()).toBe(true);
  });
});