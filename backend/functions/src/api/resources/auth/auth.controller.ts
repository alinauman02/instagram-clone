import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { createUserProfileDocument, UserProfile } from '../user-profile';
import { SignupRequestPayLoad } from './auth.model';

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const profile = plainToInstance(SignupRequestPayLoad, req.body as SignupRequestPayLoad);
    await validateOrReject(profile);
    const userRecord = await signUpUser(req.body.email, req.body.password);
    delete req.body.password;
    const userProfile = plainToInstance(UserProfile, req.body as UserProfile);
    res.send(await createUserProfileDocument(userRecord.uid, userProfile));
  } catch (error) {
    next(error);
  }
};
