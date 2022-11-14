import { UserProfile } from '../user-profile';
import { firestore } from '../../config';

const createUserProfileDocument = async (uid: string, profile: UserProfile) => {
  const date: Date = new Date();
  const ref = firestore.collection('user-profiles').doc(uid);
  return ref.set({ ...profile, createdAt: date, updatedAt: date, isDeleted: false });
};

const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection('user-profiles').doc(uid);
  const doc = await ref.get();
  return doc.data();
};

const patchUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection('user-profiles').doc(uid);
  const date: Date = new Date();
  const doc = ref.update({ ...userProfile, updatedAt: date });
  return doc;
};

export { createUserProfileDocument, getUserProfileDocument, patchUserProfileDocument };
