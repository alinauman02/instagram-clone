import { Router } from 'express';
import { getUserProfile } from './user-profile.controller';

export const profileRouter = Router();

profileRouter.get('/', getUserProfile);
