// src/fibRoute.ts
import { Request, Response } from "express";

export default function fibRoute(req: Request, res: Response) {
  const num = parseInt(req.params.num, 10);
  if (isNaN(num) || num < 0) {
    return res.send(`fibonacci(${num}) is undefined`);
  }
  let a = 0, b = 1;
  for (let i = 2; i <= num; i++) {
    [a, b] = [b, a + b];
  }
  const result = num === 0 ? 0 : b;
  res.send(`fibonacci(${num}) is ${result}`);
}
