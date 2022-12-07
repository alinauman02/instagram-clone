import { FieldValue } from 'firebase-admin/firestore';
import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';
import { getUserProfileDocument } from '../user-profile';
import { FollowRequestPlayLoad } from './follow.model';

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

export const followUserProfileDocument = async (username: string, profile: FollowRequestPlayLoad) => {
  const refCollections = firestore.collection(FirestoreCollection.USER_PROFILES);
  let refDoc = refCollections.where('username', '==', username);
  const snapShot = (await refDoc.limit(1).get()).docs[0];
  const data = snapShot.data();
  let refDocField = snapShot.ref;
  await refDocField.update({ followings: FieldValue.arrayUnion({ username: profile.username, name: profile.name }) });
  refDoc = refCollections.where('username', '==', profile.username);
  refDocField = (await refDoc.limit(1).get()).docs[0].ref;
  await refDocField.update({
    followers: FieldValue.arrayUnion({ username: data.username, name: data.name }),
  });
  return { ...profile };
};

export const unFollowUserProfileDocument = async (username: string, uid: string) => {
  const profile = await getUserProfileDocument(uid);
  const refCollections = firestore.collection(FirestoreCollection.USER_PROFILES);
  const refDoc = refCollections.where('username', '==', username);
  const snapShot = (await refDoc.limit(1).get()).docs[0];
  const followingProfile = (await refDoc.limit(1).get()).docs[0].data();
  const refDocField = snapShot.ref;
  await refDocField.update({
    followers: FieldValue.arrayRemove({ name: profile.name ?? '', username: profile.username ?? '' }),
  });
  refCollections.doc(uid).update({
    followings: FieldValue.arrayRemove({ name: followingProfile.name, username: followingProfile.username }),
  });

  return { ...profile };
};
