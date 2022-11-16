import { Router } from 'express';
import { signup } from '.';

export const authRouter = Router();
authRouter.post('/signup', signup);
