import { RequestHandler } from 'express';
import { followUserProfileService, removeFollowUserProfileService, unFollowUserProfileService } from './follow.service';

export const followUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const uid = req.user?.uid ?? '';
    console.log(uid);
    const profile = await followUserProfileService(req.params.username, uid);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const unFollowUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const uid = req.user?.uid ?? '';
    const profile = await unFollowUserProfileService(req.params.username, uid);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const removeFollowUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const uid = req.user?.uid ?? '';
    const profile = await removeFollowUserProfileService(req.params.username, uid);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};
