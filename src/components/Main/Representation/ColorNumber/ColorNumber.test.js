import React from 'react';
import ColorNumber from './ColorNumber';
import { shallow } from 'enzyme';

describe('ColorNumber', () => {
  it('should have one orange element', () => {
    const component = shallow(<ColorNumber numbers={['1234']} />);
    // On doit avoir un span
    expect(component.find('span')).toHaveLength(1);
    // Le premier span doit être orange
    expect(component.find('span').at(0).hasClass('orange')).toEqual(true);
  });
});
