import { shallow } from 'enzyme';
import React from 'react';
import Main from './Main';
import Representations from './Representation/Representations';

describe('Main', () => {
  it('should contain Representations', () => {
    const composant = shallow(<Main />);
    expect(composant.contains(<Representations />)).toEqual(true);
  });
});
