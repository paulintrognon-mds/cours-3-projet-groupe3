import React from 'react';
import BinaryRepresentation from './BinaryRepresentation';
import ColorNumber from '../ColorNumber/colorNumber';
import { shallow } from 'enzyme';

describe('components/Main/Representation/BinaryRepresentation/BinaryRepresentation', () => {
  it('checks if BinaryRepresentation contains ColorNumber with the right value', () => {
    const component = shallow(<BinaryRepresentation number={2} />);
    expect(component.contains(<ColorNumber numbers={['10']} />)).toEqual(true);
  });
  it('should be null if not a number', () => {
    const component = shallow(<BinaryRepresentation number={undefined} />);
    expect(component.isEmptyRender()).toEqual(true);
  });
});
