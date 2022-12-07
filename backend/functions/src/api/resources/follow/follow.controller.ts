import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RequestHandler } from 'express';
import { FollowRequestPlayLoad } from './follow.model';
import {
  followUserProfileService,
  getFOllowedByUserProfilesService,
  getFollowingUserProfilesService,
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
    const userProfile = plainToInstance(FollowRequestPlayLoad, req.body as FollowRequestPlayLoad);
    await validateOrReject(userProfile);
    const profile = await followUserProfileService(req.params.username, userProfile);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};

export const unFollowUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const uid = req.user?.id?? '';
    const profile = await unFollowUserProfileService(req.params.username, uid);
    res.send(profile);
  } catch (error) {
    next(error);
  }
};
