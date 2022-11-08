import { UserProfile } from '../user-profile';
import { firestore } from '../../config';
import { database } from 'firebase-functions/v1/firestore';

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

export { createUserProfileDocument, getUserProfileDocument };
