import { Router } from 'express';
import { validateIdToken } from '../../middleware';
import { followUserProfile, removeFollowUserProfile, unFollowUserProfile } from './follow.controller';

export const followRouter = Router();

followRouter.use(validateIdToken);
followRouter.post('/follow-user-profile/:username', followUserProfile);
followRouter.patch('/unfollow-user-profile/:username', unFollowUserProfile);
followRouter.patch('/removefollow-user-profile/:username', removeFollowUserProfile);
