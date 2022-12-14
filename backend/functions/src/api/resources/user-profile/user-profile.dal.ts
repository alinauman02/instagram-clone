import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';
import { docToObj, setCommonFieldsDocument, setUpdatedAtDocument } from '../../../utils';
import { UserProfile } from '../user-profile';

export const createUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const refCheck = firestore.collection(FirestoreCollection.USER_PROFILES);
  const ref = refCheck.doc(uid);
  await ref.set({ ...setCommonFieldsDocument(userProfile) });
  const snapShot = await ref.get();
  return docToObj(snapShot);
};

export const checkEmail = async (email: string) => {
  const refCheck = firestore.collection(FirestoreCollection.USER_PROFILES);
  const snapShot = await refCheck.where('email', '==', email).get();
  if (!snapShot.empty) return true;
  return false;
};

export const checkUsername = async (username: string) => {
  const refCheck = firestore.collection(FirestoreCollection.USER_PROFILES);
  const snapShot = await refCheck.where('username', '==', username).get();
  if (!snapShot.empty) return true;
  return false;
};

export const getUserProfileDocument = async (uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const snapShot = await ref.get();
  if (!snapShot.exists) throw new Error(`User with id ${uid} does not exist`);
  return docToObj(snapShot);
};

export const getUserProfileDocumentByUserName = async (userName: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).where('username', '==', userName);
  const snapShot = await ref.limit(1).get();
  if (snapShot.empty) throw new Error(`User with username ${userName} does not exist`);
  return docToObj(snapShot.docs[0]);
};

export const updateUserProfileDocument = async (uid: string, userProfile: UserProfile) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  userProfile.phoneNumber = userProfile.phoneNumber ?? '';
  await ref.update({ ...setUpdatedAtDocument(userProfile) });
  const snapShot = await ref.get();
  return docToObj(snapShot);
};
