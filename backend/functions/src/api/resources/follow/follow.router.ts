import { Router } from 'express';
import { canEditProfile, validateIdToken } from '../../middleware';
import { followUserProfile, getFOllowedByUserProfiles, getFollowingUserProfiles, unFollowUserProfile } from './follow.controller';

export const followRouter = Router();

followRouter.get('/followed-by-user-profiles/:username', getFOllowedByUserProfiles);
followRouter.get('following-user-profiles/:username', getFollowingUserProfiles);
followRouter.post('/follow-user-profile/:id', validateIdToken, canEditProfile, followUserProfile);
followRouter.delete('unfollow-user-profile/username/:username', validateIdToken, canEditProfile, unFollowUserProfile);
