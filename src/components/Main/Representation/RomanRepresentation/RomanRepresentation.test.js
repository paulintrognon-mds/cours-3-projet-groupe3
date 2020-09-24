import React from 'react';
import { shallow } from 'enzyme';
import RomanRepresentation from './RomanRepresentation';

describe('RomanRepresentation', () => {
  it('should display error message if number > 10000', () => {
    const component = shallow(<RomanRepresentation number={12000} />);
    expect(
      component.contains(<p>Ce nombre est trop grand pour être affiché en nombre romain.</p>)
    ).toEqual(true);
  });
});
