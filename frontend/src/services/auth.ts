import { auth } from 'config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export async function signUp(email: string, password: string) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function logIn(email: string, password: string) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

export function logOut() {
  return signOut(auth);
}
