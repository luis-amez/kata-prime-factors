import { primeFactors } from '../core/primeFactors';

describe('primeFactors', () => {
  it('should return 2 for 2', () => {
    const result = primeFactors(2);

    expect(result).toBe(2);
  });
});
