import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { checkEmail, checkUsername, createUserProfileDocument, UserProfile } from '../user-profile';
import { SignupRequestPayLoad } from './auth.model';

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const profile = new SignupRequestPayLoad(req.body.username, req.body.email, req.body.password, req.body.name);
    await validateOrReject(profile);
    if (await checkUsername(profile.username)) throw new Error('Username Already exists!');
    if (await checkEmail(profile.email)) throw new Error('Email already exists');

    checkEmail(profile.email);
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
