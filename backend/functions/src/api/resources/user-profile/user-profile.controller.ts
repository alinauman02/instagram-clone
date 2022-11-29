import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { checkEmail, checkUsername, UserProfile } from '.';
import {
  getUserProfileService,
  getUserProfileServiceByUserName,
  updateUserProfileService,
} from './user-profile.service';

export const getUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getUserProfileService(req.params.id);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const getUserProfileByUserName: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getUserProfileServiceByUserName(req.params.username);
    await validateOrReject(UserProfile);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const UpdateUserProfile: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body);
    const userProfile = plainToClass(UserProfile, req.body);
    await validateOrReject(userProfile[0]);
    if (await checkUsername(userProfile[0].username)) throw new Error('Username Already exists!');
    if (await checkEmail(userProfile[0].email)) throw new Error('Email already exists');
    const profile = await updateUserProfileService(req.params.id, userProfile[0]);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};
