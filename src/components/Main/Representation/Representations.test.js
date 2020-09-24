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
});
