import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { createUserProfileDocument, UserProfile } from '../user-profile';
import { SignupRequestPayLoad } from './auth.model';

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const profile = new SignupRequestPayLoad(req.body.username, req.body.email, req.body.password, req.body.name);
    await validateOrReject(profile);
    const userRecord = await signUpUser(req.body.email, req.body.password, req.body.username);
    const userProfile = new UserProfile(
      profile.username,
      profile.email,
      profile.name,
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
