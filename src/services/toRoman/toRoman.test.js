import React from 'react';
import toRoman from './toRoman';

describe('toRoman', () => {
  it('should return I if number = 1', () => {
    expect(toRoman(1)).toEqual('I');
  });
  it('should return IV if number = 4', () => {
    expect(toRoman(4)).toEqual('IV');
  });
  it('should return V if number = 5', () => {
    expect(toRoman(5)).toEqual('V');
  });
  it('should return IX if number = 9', () => {
    expect(toRoman(9)).toEqual('IX');
  });
  it('should return X if number = 10', () => {
    expect(toRoman(10)).toEqual('X');
  });
  it('should return XL if number = 40', () => {
    expect(toRoman(40)).toEqual('XL');
  });
  it('should return L if number = 50', () => {
    expect(toRoman(50)).toEqual('L');
  });
  it('should return XC if number = 90', () => {
    expect(toRoman(90)).toEqual('XC');
  });
  it('should return C if number = 100', () => {
    expect(toRoman(100)).toEqual('C');
  });
  it('should return CD if number = 400', () => {
    expect(toRoman(400)).toEqual('CD');
  });
  it('should return D if number = 500', () => {
    expect(toRoman(500)).toEqual('D');
  });
  it('should return CM if number = 900', () => {
    expect(toRoman(900)).toEqual('CM');
  });
  it('should return M if number = 1000', () => {
    expect(toRoman(1000)).toEqual('M');
  });
  it('should return nothing if number < 0', () => {
    expect(toRoman(0)).toEqual('');
  });
});
