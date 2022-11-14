import { UserProfile } from '../user-profile';
import { firestore } from '../../../config';
import { COLLECTION_NAMES } from '../../../constants';

export const updateDocumentDate = (ref: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>) => {
  const date: Date = new Date();
  ref.set({ updatedAt: date }, { merge: true });
};

export const createDocumentDate = (ref: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>) => {
  const date: Date = new Date();
  ref.set({ updatedAt: date, createdAt: date, isDeleted: false }, { merge: true });
};

export const createUserProfileDocument = async (uid: string, profile: UserProfile) => {
  const date: Date = new Date();
  const ref = firestore.collection(COLLECTION_NAMES.USER_PROFILES).doc(uid);
  ref.set({ ...profile, createdAt: date, updatedAt: date, isDeleted: false });
  return await (await ref.get()).data();
};

export const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection(COLLECTION_NAMES.USER_PROFILES).doc(uid);
  const doc = await ref.get();
  return doc.data();
};

export const updateUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(COLLECTION_NAMES.USER_PROFILES).doc(uid);
  ref.update({ ...userProfile });
  updateDocumentDate(ref);
  return await (await ref.get()).data();
};
