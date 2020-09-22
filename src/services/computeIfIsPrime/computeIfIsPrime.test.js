const { computeIfIsPrime } = require('./computeIfIsPrime');

describe('computeIfIsPrime', () => {
  it('should return true if a given number is a prime', () => {
    expect(computeIfIsPrime(13)).toEqual(true);
  });
});
