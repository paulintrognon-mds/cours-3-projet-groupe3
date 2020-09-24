import React from 'react';
import toRoman from './toRoman';

describe('toRoman', () => {
  it('should return I if number = 1', () => {
    expect(toRoman(1)).toEqual('I');
  });
});
