import { RequestHandler } from 'express';
import { signUpUser } from '.';
import { createUserProfileDocument, UserProfile } from '../user-profile';

export const signup: RequestHandler = async (req, res) => {
  const name: string = req.body.name;
  const email: string = req.body.email;
  const password: string = req.body.password;
  const username: string = req.body.username;
  const profile: UserProfile = { name, username, email, phoneNumber: '', gender: '', bio: '' };
  const userRecord = await signUpUser(email, password);
  res.send(await createUserProfileDocument(userRecord.uid, profile));
};
