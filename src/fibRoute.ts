// Endpoint for querying the fibonacci numbers
// src/fibRoute.ts
// src/fibRoute.ts
import express, { Request, Response } from "express";
import fib from "./fib";

const router = express.Router();

router.get("/:num", (req: Request, res: Response) => {
  const n = parseInt(req.params.num, 10);

  if (isNaN(n)) {
    return res.send(`fibonacci(${req.params.num}) is undefined`);
  }

  try {
    let result: number | undefined;
    if (n < 0) {
      result = undefined;
    } else {
      result = fib(n);
    }
    res.send(`fibonacci(${n}) is ${result}`);
  } catch {
    res.send(`fibonacci(${n}) is undefined`);
  }
});

export default router;
