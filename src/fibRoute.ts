// src/fibRoute.ts
import { Request, Response } from "express";
import { fib } from "./fib";

export default function fibRoute(req: Request, res: Response) {
  // tests call app.get('/fib/:num', fibRoute) so the param name is 'num'
  const raw = req.params.num;
  const n = parseInt(String(raw), 10);

  if (isNaN(n) || n < 0) {
    // Tests expect plain text like: "fibonacci(-2) is undefined"
    return res.send(`fibonacci(${raw}) is undefined`);
  }

  try {
    const result = fib(n);
    return res.send(`fibonacci(${n}) is ${result}`);
  } catch (error) {
    // Handle any unexpected errors from fib()
    return res.send(`fibonacci(${n}) is undefined`);
  }
}