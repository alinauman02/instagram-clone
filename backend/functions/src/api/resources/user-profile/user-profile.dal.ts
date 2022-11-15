import { UserProfile } from '../user-profile';
import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';
import { addDocumentUid, setCommonFieldsDocument, setUpdatedAtDocument } from '../../../utils';

export const createUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  ref.set({ ...setCommonFieldsDocument(userProfile) });
  const doc = await ref.get();
  return doc.data();
};

export const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const doc = await ref.get();
  return addDocumentUid(doc.data(), uid);
};

export const updateUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  await ref.update(setUpdatedAtDocument(userProfile));
  const doc = await ref.get();
  return addDocumentUid(doc.data(), uid);
};
