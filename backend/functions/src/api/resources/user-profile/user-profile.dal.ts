import { UserProfile } from '../user-profile';
import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';
import { docToObj, setCommonFieldsDocument, setUpdatedAtDocument } from '../../../utils';

export const createUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  await ref.set({ ...setCommonFieldsDocument(userProfile) });
  const snapShot = await ref.get();
  return docToObj(snapShot);
};

export const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const snapShot = await ref.get();
  if (!snapShot.exists) throw new Error(`User with id ${uid} does not exist`);
  return docToObj(snapShot);
};

export const updateUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  await ref.update({ ...setUpdatedAtDocument(userProfile) });
  const snapShot = await ref.get();
  return docToObj(snapShot);
};
