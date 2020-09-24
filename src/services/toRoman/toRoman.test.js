import React from 'react';
import toRoman from './toRoman';

describe('toRoman', () => {
  it('should return I if number = 1', () => {
    expect(toRoman(1)).toEqual('I');
  });
  it('should return IV if number = 4', () => {
    expect(toRoman(4)).toEqual('IV');
  });
});
