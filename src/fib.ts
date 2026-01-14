// util function that computes the fibonacci numbers
export function fibonacci(n: number): number[] {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('Input must be a positive integer');
  }

  const fibNumbers: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibNumbers.push(0);
    } else if (i === 1) {
      fibNumbers.push(1);
    } else {
      fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }
  }

  return fibNumbers;
}
