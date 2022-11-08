import { UserProfile } from '../user-profile';
import { firestore } from '../../config';

const createUserProfileDocument = async (uid: string, profile: UserProfile) => {
  const ref = firestore.collection('users').doc(uid);
  return ref.set(profile);
};

const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection('users').doc(uid);
  const doc = await ref.get();
  return doc.data();
};

export { createUserProfileDocument, getUserProfileDocument };
