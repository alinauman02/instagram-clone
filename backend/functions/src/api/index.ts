import * as express from 'express';
import * as cors from 'cors';

import { errorHandler, logger } from './../middleware';
import { profileRouter } from '../resources/user-profile';
import { functions } from '../config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use('/UserProfile', profileRouter);

app.use(errorHandler);

const endPoints = functions.https.onRequest(app);

export {endPoints};