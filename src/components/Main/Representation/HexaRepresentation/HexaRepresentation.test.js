import { shallow } from 'enzyme';
import React from 'react';
import ColorNumber from '../ColorNumber/ColorNumber';
import HexaRepresentation from './HexaRepresentation';

describe('HexaRepresentation', () => {
  it('shouldnt display anything if no number given', () => {
    const component = shallow(<HexaRepresentation />);
    expect(component.isEmptyRender()).toEqual(true);
  });
  it('should return 2 if number = 2', () => {
    const component = shallow(<HexaRepresentation number={2} />);
    expect(component.contains(<ColorNumber numbers={['2']} />)).toEqual(true);
  });
});
