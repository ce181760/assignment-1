// src/fib.ts

/**
 * Recursive Fibonacci function.
 * Returns a non-negative integer, or undefined for invalid inputs.
 */
export default function fibonacci(n: number): number | undefined {
    if (!Number.isInteger(n) || n < 0) {
        // return undefined for invalid input instead of throwing
        return undefined;
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    // recursive call
    const prev1 = fibonacci(n - 1);
    const prev2 = fibonacci(n - 2);

    // check that recursive calls did not return undefined
    if (prev1 === undefined || prev2 === undefined) {
        return undefined;
    }

    return prev1 + prev2;
}

// Example usage when running directly
if (require.main === module) {
    const input = 10;
    console.log(`Fibonacci(${input}) = ${fibonacci(input)}`);
}
