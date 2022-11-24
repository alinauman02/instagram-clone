import { NextFunction, Request, Response } from 'express';
import { getAuth } from 'firebase-admin/auth';

export const validateIdToken = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    getAuth()
      .verifyIdToken(req.headers.authorization.split(' ')[1])
      .then(decodedToken => {
        req.body.user = decodedToken;
        next();
      })
      .catch(error => {
        next(error);
      });
  } else next(new Error("'User not authenticated'"));
};
