import { Router } from 'express';
import { getUserProfile, UpdateUserProfile } from './user-profile.controller';

export const profileRouter = Router();

profileRouter.get('/:id', getUserProfile);
profileRouter.patch('/:id', UpdateUserProfile);
