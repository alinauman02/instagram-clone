import { firestore, functions } from '../config';

export const onAuthCreate = functions.auth.user().onCreate(user => {
  return firestore.collection('users').doc(user.uid).set({ email: user.email });
});
