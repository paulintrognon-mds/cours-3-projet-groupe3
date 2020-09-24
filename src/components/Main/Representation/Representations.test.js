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
  it('should have HexaRepresentation if number = 15', () => {
    const component = shallow(<Representations number={15} />);
    expect(component.contains(<HexaRepresentation number={15} />)).toEqual(true);
  });
  it('should have BinaryRepresentation if number = 15', () => {
    const component = shallow(<Representations number={15} />);
    expect(component.contains(<BinaryRepresentation number={15} />)).toEqual(true);
  });
  it('should return an error if negative number', () => {
    const component = shallow(<Representations number={-5} />);
    expect(
      component.contains(
        <p className="Error">Le nombre doit être un nombre entier supérieur ou égal à 1 !</p>
      )
    ).toEqual(true);
  });
});
