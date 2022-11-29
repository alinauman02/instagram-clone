import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { UserProfile } from '.';
import { getUserProfileService, updateUserProfileService } from './user-profile.service';

export const getUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getUserProfileService(req.params.id);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const UpdateUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const userProfile = plainToInstance(UserProfile, req.body as UserProfile);
    await validateOrReject(userProfile);
    const profile = await updateUserProfileService(req.params.id, userProfile);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};
