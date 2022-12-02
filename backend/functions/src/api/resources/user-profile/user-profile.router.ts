import { Router } from 'express';
import { canEditProfile } from '../../middleware';
import { getUserProfile, getUserProfileByUserName, updateUserProfile } from './user-profile.controller';

export const profileRouter = Router();

profileRouter.get('/:id', getUserProfile);
profileRouter.get('/username/:username', getUserProfileByUserName);
profileRouter.patch('/:id', canEditProfile, updateUserProfile);
