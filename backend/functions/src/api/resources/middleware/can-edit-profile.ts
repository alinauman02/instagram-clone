import { NextFunction, Request, Response } from 'express';

export const canEditProfile = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user.uid === req.params.id) {
      next();
    } else throw new Error('Authorization Error! User is not allowed');
  } catch (error) {
    next(error);
  }
};
