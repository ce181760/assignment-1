// Endpoint for querying the fibonacci numbers
// src/fibRoute.ts
import express, { Request, Response } from "express";
import fib from "./fib"

const router = express.Router();

router.get("/:n", (req: Request, res: Response) => {
  const n = parseInt(req.params.n, 10);
  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: "n must be a non-negative integer" });
  }
  try {
    const result = fib(n);
    res.json({ n, fib: result }); // must be { n, fib }
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
