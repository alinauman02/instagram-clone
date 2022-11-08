import { auth } from '../config';

export function signUpUser(email: string, password: string) {
  return auth.createUser({ email, password });
}
