import React from 'react';
import IsPrime from './IsPrime';
import { shallow } from 'enzyme';

describe('IsPrime', () => {
  it('should say if the number is prime', () => {
    const component = shallow(<IsPrime number={13} />);
    expect(component.contains('Votre nombre est premier !')).toEqual(true);
  });
});
