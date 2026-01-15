// src/fib.ts

/**
 * Returns the n-th Fibonacci number
 * @param n The position in the Fibonacci sequence (0-based)
 */
export function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("n must be a non-negative integer");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

// Example usage when running this file directly
if (require.main === module) {
    const input = 10; // change this number to test
    console.log(`Fibonacci(${input}) = ${fibonacci(input)}`);
}
