import isPrime from './isPrime';

describe('services/primes/isPrime', () => {
  it('should return true if a given number is a prime', () => {
    expect(isPrime(13)).toEqual(true);
  });
});
