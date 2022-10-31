import { auth } from 'config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

export async function signUp(email: string, password: string) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function logIn(email: string, password: string) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function signUpWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const res = await signInWithPopup(auth, provider);
  return res.user;
}

export function logOut() {
  return signOut(auth);
}
