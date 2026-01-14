// Endpoint for querying the fibonacci numbers
// src/fibRoute.ts
import express, { Request, Response } from "express";
import fib from "./fib"

const router = express.Router();

/**
 * GET /fib/:n
 * Returns the nth Fibonacci number
 */
router.get("/:n", (req: Request, res: Response) => {
  const n = parseInt(req.params.n, 10);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: "n must be a non-negative integer" });
  }

  try {
    const result = fib(n);
    res.json({ n, fib: result });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
