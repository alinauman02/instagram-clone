import { FieldValue } from 'firebase-admin/firestore';
import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';

export const getFOllowedByUserProfilesDocument = async (username: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).where('username', '==', username);
  const snapShot = await ref.limit(1).get();
  const data = snapShot.docs[0].data();
  return data ? data.followers : [];
};

export const getFollowingUserProfilesDocument = async (username: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).where('username', '==', username);
  const snapShot = await ref.limit(1).get();
  const data = snapShot.docs[0].data();
  return data ? data.followings : [];
};

export const followUserProfileDocument = async (username: string, uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const profile = (await ref.get()).data();
  const refCollections = firestore.collection(FirestoreCollection.USER_PROFILES);
  const refDoc = refCollections.where('username', '==', username);
  const snapShot = (await refDoc.limit(1).get()).docs[0];
  const followingProfile = (await refDoc.limit(1).get()).docs[0].data();
  const refDocField = snapShot.ref;
  await refDocField.update({
    followers: FieldValue.arrayUnion({ name: profile?.name ?? '', username: profile?.username ?? '' }),
  });
  refCollections.doc(uid).update({
    followings: FieldValue.arrayUnion({ name: followingProfile.name, username: followingProfile.username }),
  });

  return { ...profile };
};

export const unFollowUserProfileDocument = async (username: string, uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const profile = (await ref.get()).data();
  const refCollections = firestore.collection(FirestoreCollection.USER_PROFILES);
  const refDoc = refCollections.where('username', '==', username);
  const snapShot = (await refDoc.limit(1).get()).docs[0];
  const followingProfile = (await refDoc.limit(1).get()).docs[0].data();
  const refDocField = snapShot.ref;
  await refDocField.update({
    followers: FieldValue.arrayRemove({ name: profile?.name ?? '', username: profile?.username ?? '' }),
  });
  refCollections.doc(uid).update({
    followings: FieldValue.arrayRemove({ name: followingProfile.name, username: followingProfile.username }),
  });

  return { ...profile };
};

export const removeFollowUserProfileDocument = async (username: string, uid: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const profile = (await ref.get()).data();
  const refCollections = firestore.collection(FirestoreCollection.USER_PROFILES);
  const refDoc = refCollections.where('username', '==', username);
  const snapShot = (await refDoc.limit(1).get()).docs[0];
  const followingProfile = (await refDoc.limit(1).get()).docs[0].data();
  const refDocField = snapShot.ref;
  await refDocField.update({
    followings: FieldValue.arrayRemove({ name: profile?.name ?? '', username: profile?.username ?? '' }),
  });
  refCollections.doc(uid).update({
    followers: FieldValue.arrayRemove({ name: followingProfile.name, username: followingProfile.username }),
  });

  return { ...profile };
};
