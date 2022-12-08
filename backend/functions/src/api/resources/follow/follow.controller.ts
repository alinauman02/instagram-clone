import { RequestHandler } from 'express';
import {
  followUserProfileService,
  getFOllowedByUserProfilesService,
  getFollowingUserProfilesService,
  removeFollowUserProfileService,
  unFollowUserProfileService,
} from './follow.service';

export const getFOllowedByUserProfiles: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getFOllowedByUserProfilesService(req.params.username);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const getFollowingUserProfiles: RequestHandler = async (req, res, next) => {
  try {
    const profile = await getFollowingUserProfilesService(req.params.username);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

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
