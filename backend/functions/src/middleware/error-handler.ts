import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  if (Array.isArray(error)) {
    const temp = error[0].constraints;
    res.status(500).json({ error: Object.values(temp)[0] });
  } else
    res.status(500).json({
      error: error?.message,
    });
};
