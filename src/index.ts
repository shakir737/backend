import express, { type Application, type Request, type Response } from 'express';
import rateLimit from 'express-rate-limit';

const app: Application = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // set `RateLimit` related headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	message: 'Too many requests from this IP, please try again after 15 minutes',
});

const loginLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	limit: 5, // Only 5 failed attempts per hour
	message: 'Too many login attempts, please try again in an hour',
	standardHeaders: true,
	legacyHeaders: false,
});

app.use(limiter);
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
