// util function that computes the fibonacci numbers
// src/fib.ts

/**
 * Compute the nth Fibonacci number
 * @param n - index (0-based)
 * @returns Fibonacci number
 */
export default function fib(n: number): number {
  if (n < 0) throw new Error("n must be a non-negative integer");
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
