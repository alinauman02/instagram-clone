import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { checkEmail, checkUsername, createUserProfileDocument, UserProfile } from '../user-profile';
import { SignupRequestPayLoad } from './auth.model';

export const signup: RequestHandler = async (req, res, next) => {
  try {
const profile = plainToClass(SignupRequestPayLoad, req.body);
    await validateOrReject(profile[0]);
    if (await checkUsername(profile[0].username)) throw new Error('Username Already exists!');
    if (await checkEmail(profile[0].email)) throw new Error('Email already exists');

    checkEmail(profile[0].email);
    const userRecord = await signUpUser(req.body.email, req.body.password, req.body.username);
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
