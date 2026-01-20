// src/fibRoute.ts
import { Request, Response } from "express";
import { fibonacci } from "./fib";

const fibRoute = (req: Request<{ num?: string }>, res: Response): void => {
  let numStr = "";

  if (typeof req.params.num === "string") {
    numStr = req.params.num;
  }

  const n = Number.parseInt(numStr, 10);

  if (Number.isNaN(n) || !Number.isInteger(n)) {
    res.status(400).send("Invalid input");
    return;
  }

  const fibN = fibonacci(n);
  res.send(`fibonacci(${n}) is ${String(fibN)}`);
};

export default fibRoute;