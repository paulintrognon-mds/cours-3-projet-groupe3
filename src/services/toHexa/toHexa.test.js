import toHexa from './toHexa';

describe('services/toHexa/toHexa', () => {
  it('should return 2D when given 45', () => {
    expect(toHexa(45)).toEqual('2D');
  });
});
