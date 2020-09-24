import { shallow } from 'enzyme';
import React from 'react';
import HexaRepresentation from './HexaRepresentation';

describe('HexaRepresentation', () => {
  it('shouldnt display anything if no number given', () => {
    const component = shallow(<HexaRepresentation />);
    expect(component.isEmptyRender()).toEqual(true);
  });
});
