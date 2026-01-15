// src/fib.ts

export default function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("n must be a non-negative integer");
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage when running this file directly
if (require.main === module) {
    const input = 10; // change this to test
    console.log(`Fibonacci(${input}) = ${fibonacci(input)}`);
}
