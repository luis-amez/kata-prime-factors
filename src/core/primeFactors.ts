export function getPrimeFactorsFor(number: number) {
  validateInput(number);

  const factors: number[] = [];
  let currentFactor = 2;
  let remainder = number;

  while (remainder !== 1) {
    while (remainder % currentFactor === 0) {
      factors.push(currentFactor);
      remainder /= currentFactor;
    }
    currentFactor++;
  }

  return factors;
}

function validateInput(number: number) {
  if (number === 1) throw new Error('Invalid input: 1 is not a prime number');
  if (number === 0) throw new Error('Invalid input: 0');
  if (number < 0) throw new Error('Invalid input: negative number');
  if (!Number.isInteger(number)) throw new Error('Invalid input: non-integer');
}
