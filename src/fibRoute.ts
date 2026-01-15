// src/fibRoute.ts
import express, { Request, Response } from 'express';
import { fibonacci } from './fib';

const router = express.Router();

/**
 * GET /fib/:n
 * Returns the n-th Fibonacci number
 */
router.get('/fib/:n', (req: Request, res: Response) => {
    const nStr = req.params.n;
    const n = Number(nStr);

    if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
        return res.status(400).json({ error: 'n must be a non-negative integer' });
    }

    try {
        const result = fibonacci(n);
        res.json({ n, fibonacci: result });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
