import { NextFunction, Request, Response } from 'express';

export const canEditProfile = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.user.uid === req.params.id) {
    console.log('verified AUthorization');
    next();
  } else next(new Error("'Authorization Error'"));
};
