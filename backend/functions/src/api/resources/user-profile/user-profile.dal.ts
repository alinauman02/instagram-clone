import { UserProfile } from '../user-profile';
import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';
import { onCreateDocument, onUpdateDocument } from '../../../utils';

export const createUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  ref.set({ ...onCreateDocument(userProfile) });
  const doc = await ref.get();
  return doc.data();
};

export const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const doc = await ref.get();
  return doc.data();
};

export const updateUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  await ref.update({ ...onUpdateDocument(userProfile) });
  const doc = await ref.get();
  return { ...doc.data(), uid };
};
