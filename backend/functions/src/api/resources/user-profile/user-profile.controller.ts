import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { UserProfile } from '.';
import { getUserProfileService, updateUserProfileService } from './user-profile.service';

export const getUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getUserProfileService(req.params.id);
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
      req.body.phoneNumber
    );
    console.log(req.body.phoneNumber);
    await validateOrReject(userProfile);
    const profile = await updateUserProfileService(req.params.id, userProfile);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};
