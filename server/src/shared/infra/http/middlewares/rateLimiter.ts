import { Request, Response, NextFunction } from 'express';
import redis from 'redis';
import { RateLimiterRedis } from 'rate-limiter-flexible';

import AppError from '@shared/errors/AppError';

const redisClient = redis.createClient({
  host: process.env.APP_REDIS_HOST,
  port: Number(process.env.APP_REDIS_PORT),
  password: process.env.APP_REDIS_PASSWORD || undefined,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimit',
  points: 5,
  duration: 1,
});

async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    throw new AppError('Too many requests.', 429);
  }
}

export default rateLimiter;
