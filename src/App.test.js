import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from './components/Header/Header';

describe('App', () => {
  it('should contain a Header', () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toEqual(true);
  });
});
