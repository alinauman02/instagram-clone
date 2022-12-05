import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { checkEmail, checkUsername, createUserProfileDocument, UserProfile } from '../user-profile';
import { SignupRequestPayLoad } from './auth.model';

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const profile = plainToInstance(SignupRequestPayLoad, req.body as SignupRequestPayLoad);
    await validateOrReject(profile);
    if (await checkUsername(profile.username)) throw new Error('Username Already exists!');
    if (await checkEmail(profile.email)) throw new Error('Email already exists');
    const userRecord = await signUpUser(req.body.email, req.body.password, req.body.username);

    delete req.body.password;
    const userProfile = plainToInstance(UserProfile, req.body as UserProfile);

    res.send(await createUserProfileDocument(userRecord.uid, userProfile));
  } catch (error) {
    next(error);
  }
};
