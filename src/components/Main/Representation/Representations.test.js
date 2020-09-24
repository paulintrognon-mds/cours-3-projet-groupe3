import { shallow } from 'enzyme';
import React from 'react';
import BinaryRepresentation from './BinaryRepresentation/BinaryRepresentation';
import HexaRepresentation from './HexaRepresentation/HexaRepresentation';
import Representations from './Representations';
import RomanRepresentation from './RomanRepresentation/RomanRepresentation';

describe('Representation', () => {
  it('should be null if undefined', () => {
    const component = shallow(<Representations number={undefined} />);
    expect(component.isEmptyRender()).toEqual(true);
  });
  it('should have RomanRepresentation if number = 15', () => {
    const component = shallow(<Representations number={15} />);
    expect(component.contains(<RomanRepresentation number={15} />)).toEqual(true);
  });
});
