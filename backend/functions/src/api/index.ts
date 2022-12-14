import cors from 'cors';
import express from 'express';

import { errorHandler, logger } from './middleware';
import { profileRouter } from './resources/user-profile';

import { functions } from '../config';
import { authRouter } from './resources/auth/auth.router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use('/auth', authRouter);
app.use('/user-profiles', profileRouter);

app.use(errorHandler);

export const api = functions.https.onRequest(app);
