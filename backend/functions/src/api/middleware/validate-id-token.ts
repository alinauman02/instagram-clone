import { NextFunction, Request, Response } from 'express';
import { getAuth } from 'firebase-admin/auth';

export const validateIdToken = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    const decodedToken = await getAuth().verifyIdToken(req.headers.authorization.split(' ')[1]);
    req.user = decodedToken;
    next();
  } else next(new Error('Authentication error! Token not found'));
};
