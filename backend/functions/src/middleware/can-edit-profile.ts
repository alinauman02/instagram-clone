import { NextFunction, Request, Response } from 'express';

export const canEditProfile = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body.user.uid === req.params.id) {
      next;
    } else throw new Error("'Authorization Error'");
  } catch (error) {
    next(error);
  }
};
