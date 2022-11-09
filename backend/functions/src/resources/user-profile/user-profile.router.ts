import { Router } from 'express';
import { getUserProfile,patchUserProfile } from './user-profile.controller';

export const profileRouter = Router();

profileRouter.get('/', getUserProfile);
profileRouter.patch('/', patchUserProfile);
