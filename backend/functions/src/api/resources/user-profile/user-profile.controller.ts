import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { UserProfile } from '.';
import { getUserProfileService, getUserProfileServiceByUserName, updateUserProfileService } from './user-profile.service';

export const getUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getUserProfileService(req.params.id);
    await validateOrReject(UserProfile);
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
    const userProfile: UserProfile = new UserProfile(
      req.body.username,
      req.body.email,
      req.body.name,
      req.body.bio,
      req.body.phoneNumber,
      req.body.gender
    );
    await validateOrReject(userProfile);
    const profile = await updateUserProfileService(req.params.id, userProfile);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};
