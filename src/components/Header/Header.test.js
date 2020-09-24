import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header', () => {
  it('should have className Header into Header component', () => {
    const component = shallow(<Header />);
    expect(component.hasClass('Header')).toEqual(true);
  });
});
