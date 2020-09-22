import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from './components/Header/Header';

test('renders learn react link', () => {
  const component = shallow(<App />);
  expect(component.find(Header)).toHaveLength(1);
});
