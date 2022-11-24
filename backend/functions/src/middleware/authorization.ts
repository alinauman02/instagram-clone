import { NextFunction, Request, Response } from 'express';

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization === undefined && req.method === 'PATCH') {
    res.status(500).json({
      error: 'Authorization Error',
    });
  } else next();
};
