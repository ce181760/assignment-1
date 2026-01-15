// src/fibRoute.ts
import { Request, Response } from "express";
import fibonacci from "./fib";

/**
 * Express route handler for GET /fib/:num
 */
export default (req: Request<{ num?: string }>, res: Response): void => {
  const numStr = req.params.num || "";

  // Convert string to integer
  const n = Number.parseInt(numStr, 10);

  // Validate input
  if (Number.isNaN(n) || !Number.isInteger(n)) {
    res.status(400).send("Invalid input. Please provide an integer.");
    return;
  }

  let result: string;

  try {
    const fibN = fibonacci(n);
    // If negative number returns error, treat as undefined
    result =
      typeof fibN === "number" && fibN >= 0
        ? `fibonacci(${n}) is ${fibN}`
        : `fibonacci(${n}) is undefined`;
  } catch (err) {
    result = `fibonacci(${n}) is undefined`;
  }

  res.send(result);
};
