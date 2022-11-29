import { NextFunction, Request, Response } from 'express';
import { getAuth } from 'firebase-admin/auth';

export const validateIdToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      const decodedToken = await getAuth().verifyIdToken(req.headers.authorization.split(' ')[1]);
      req.body.user = decodedToken;
      next();
    } else throw new Error("'Authentication error! Token not found'");
  } catch (error) {
    next(error);
  }
};
