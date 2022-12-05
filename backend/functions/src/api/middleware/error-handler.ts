import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  if (Array.isArray(error)) {
    res.status(500).json({ error: Object.values(error[0].constraints)[0] });
  } else
    res.status(500).json({
      error: error?.message,
    });
};
