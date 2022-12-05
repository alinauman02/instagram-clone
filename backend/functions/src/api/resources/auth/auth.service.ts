import { auth } from '../../../config';

export async function signUpUser(email: string, password: string, username: string) {
  const userRecord = await auth.createUser({ email, password });
  auth.setCustomUserClaims(userRecord.uid, { username: username });
  return userRecord;
}
