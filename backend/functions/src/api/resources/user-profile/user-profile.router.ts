import { Router } from 'express';
import { canEditProfile, validateIdToken } from '../../middleware';
import { getUserProfile, getUserProfileByUserName, updateUserProfile } from './user-profile.controller';

export const profileRouter = Router();

profileRouter.get('/:id', getUserProfile);
profileRouter.get('/username/:username', getUserProfileByUserName);
profileRouter.use(validateIdToken);
profileRouter.patch('/:id', canEditProfile, updateUserProfile);
