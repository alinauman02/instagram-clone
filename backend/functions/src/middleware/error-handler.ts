import { isArray } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  if (isArray(error)) {
    const temp = error[0].constraints;
    console.log(temp);
    res.status(500).json(temp);
  } else
    res.status(500).json({
      error: error?.message,
    });
};
