import { firestore, functions } from '../config';

export const onAuthCreate = functions.auth.user().onCreate(userProfile => {
  return firestore.collection('users').doc(userProfile.uid).set({ email: userProfile.email, uid: userProfile.uid });
});
