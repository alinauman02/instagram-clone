import { Router } from 'express';
import { canEditProfile, validateIdToken } from '../../middleware';
import {
  followUserProfile,
  getFOllowedByUserProfiles,
  getFollowingUserProfiles,
  unFollowUserProfile,
} from './follow.controller';

export const followRouter = Router();

followRouter.get('/followed-by-user-profiles/:username', getFOllowedByUserProfiles);
followRouter.get('/following-user-profiles/:username', getFollowingUserProfiles);
followRouter.post('/follow-user-profile/:username', validateIdToken, followUserProfile);
followRouter.patch('/unfollow-user-profile/:username', validateIdToken, canEditProfile, unFollowUserProfile);
