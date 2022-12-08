import { Router } from 'express';
import { validateIdToken } from '../../middleware';
import {
  followUserProfile,
  getFOllowedByUserProfiles,
  getFollowingUserProfiles,
  removeFollowUserProfile,
  unFollowUserProfile,
} from './follow.controller';

export const followRouter = Router();

followRouter.get('/followed-by-user-profiles/:username', getFOllowedByUserProfiles);
followRouter.get('/following-user-profiles/:username', getFollowingUserProfiles);
followRouter.post('/follow-user-profile/:username', validateIdToken, followUserProfile);
followRouter.patch('/unfollow-user-profile/:username', validateIdToken, unFollowUserProfile);
followRouter.patch('/removefollow-user-profile/:username', validateIdToken, removeFollowUserProfile);
