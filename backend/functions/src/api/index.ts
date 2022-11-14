import express from 'express';
import cors from 'cors';

import { errorHandler, logger } from './../middleware';
import { profileRouter } from './resources/user-profile';

import { functions } from '../config';
import { authRouter } from './resources/auth/auth.router';
import { ROUTE_PATH } from '../constants';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use(ROUTE_PATH.USER_PROFILES, profileRouter);
app.use(ROUTE_PATH.AUTH, authRouter);

app.use(errorHandler);

export const api = functions.https.onRequest(app);
