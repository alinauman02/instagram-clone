import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { createUserProfileDocument, UserProfile } from '../user-profile';
import { SignupRequestPayLoad } from './auth.model';

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const profile = plainToClass(SignupRequestPayLoad, req.body);
    await validateOrReject(profile[0]);
    const userRecord = await signUpUser(req.body.email, req.body.password);
    const userProfile = new UserProfile(
      profile[0].username,
      profile[0].email,
      profile[0].name,
      req.body.bio,
      req.body.phoneNumber,
      req.body.createdAt,
      req.body.updatedAt,
      req.body.isDeleted
    );
    res.send(await createUserProfileDocument(userRecord.uid, userProfile));
  } catch (error) {
    next(error);
  }
};
