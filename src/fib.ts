// src/fib.ts

/**
 * Compute the nth Fibonacci number.
 * @param n - The index (0-based)
 * @returns Fibonacci number at position n
 */
export function fib(n: number): number {
  if (n < 0) throw new Error("n must be a non-negative integer");
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
