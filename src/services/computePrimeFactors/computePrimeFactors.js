import { computeIfIsPrime } from '../computeIfIsPrime/computeIfIsPrime';

export function computePrimeFactors(number) {
  if (number < 3) {
    return [number];
  }
  let currentPrime = 2;
  const primes = [];
  while (!computeIfIsPrime(number)) {
    if (number % currentPrime === 0) {
      primes.push(currentPrime);
      number = number / currentPrime;
    } else {
      currentPrime = getNextPrime(currentPrime);
    }
  }
  primes.push(number);
  return primes;
}

export function getNextPrime(number) {
  let candidate = number + 1;
  while (candidate < 999999) {
    if (computeIfIsPrime(candidate)) {
      return candidate;
    }
    candidate++;
  }
  throw new Error('next prime is too big');
}
