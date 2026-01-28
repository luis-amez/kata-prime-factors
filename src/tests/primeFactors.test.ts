import { getPrimeFactorsFor } from '../core/primeFactors';

describe('primeFactors', () => {
  it('fails for 1, given that 1 is not a prime number by definition', () => {
    expect(() => getPrimeFactorsFor(1)).toThrow('Invalid input: 1 is not a prime number');
  });

  it('fails for 0', () => {
    expect(() => getPrimeFactorsFor(0)).toThrow('Invalid input: 0');
  });

  it('fails for negative numbers', () => {
    expect(() => getPrimeFactorsFor(-1)).toThrow('Invalid input: negative number');
  });

  it('fails for non-integers', () => {
    expect(() => getPrimeFactorsFor(1.5)).toThrow('Invalid input: non-integer');
  });

  it('works for prime numbers', () => {
    expect(getPrimeFactorsFor(2)).toEqual([2]);
    expect(getPrimeFactorsFor(3)).toEqual([3]);
    expect(getPrimeFactorsFor(5)).toEqual([5]);
  });

  it('works for powers of the same prime number', () => {
    expect(getPrimeFactorsFor(27)).toEqual([3, 3, 3]);
    expect(getPrimeFactorsFor(49)).toEqual([7, 7]);
  });

  it('works for numbers with different prime factors', () => {
    expect(getPrimeFactorsFor(12)).toEqual([2, 2, 3]);
    expect(getPrimeFactorsFor(105)).toEqual([3, 5, 7]);
  });

  it('orders the prime factors in ascending order', () => {
    expect(getPrimeFactorsFor(5 * 7 * 13 * 2 * 2 * 3 * 3)).toEqual([2, 2, 3, 3, 5, 7, 13]);
  });
});
