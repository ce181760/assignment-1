// Endpoint for querying the fibonacci numbers
import { Router, Request, Response } from 'express';
import { fibonacci } from './fib';

const router = Router();

interface FibParams {
  n: string;
}

router.get('/:n', (req: Request<FibParams>, res: Response) => {
  const nString: string = req.params.n;
  const n: number = parseInt(nString, 10);

  if (Number.isNaN(n) || n < 1) {
    return res.status(400).json({
      error: 'Parameter n must be a positive integer',
    });
  }

  try {
    const result: number[] = fibonacci(n);
    return res.json({ result });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown error occurred';

    return res.status(500).json({ error: message });
  }
});

export default router;
