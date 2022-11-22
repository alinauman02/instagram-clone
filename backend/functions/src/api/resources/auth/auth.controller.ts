import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { createUserProfileDocument, UserProfile } from '../user-profile';

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const profile: UserProfile = plainToClass(UserProfile, { ...req.body, phoneNumber: '', gender: '', bio: '' });
    await validateOrReject(profile);
    const userRecord = await signUpUser(req.body.email, req.body.password);
    res.send(await createUserProfileDocument(userRecord.uid, profile));
  } catch (error) {
    next(error);
  }
};
