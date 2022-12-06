import { firestore } from '../../../config';
import { FirestoreCollection } from '../../../constants';
import { FollowRequestPlayLoad } from './follow.model';

export const getFOllowedByUserProfilesDocument = async (username: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).where('username', '==', username);
  const snapShot = await ref.limit(1).get();
  const refDoc = await snapShot.docs[0].ref.collection('followers').get();
  const data: any[] = [];
  refDoc.forEach(docs => {
    data.push(docs.data());
  });
  return data;
};

export const getFollowingUserProfilesDocument = async (username: string) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).where('username', '==', username);
  const snapShot = await ref.limit(1).get();
  const refDoc = await snapShot.docs[0].ref.collection('followings').get();
  const data: any[] = [];
  refDoc.forEach(docs => {
    data.push(docs.data());
  });
  return data;
};

export const followUserProfileDocument = async (uid: string, profile: FollowRequestPlayLoad) => {
  const ref = firestore.collection(FirestoreCollection.USER_PROFILES).doc(uid);
  const data = (await ref.get()).data();
  const refDoc = firestore.collection(FirestoreCollection.USER_PROFILES);
  let docRef = refDoc.doc(uid + '/followings/' + profile.uid);
  await docRef.set({ name: profile.name, username: profile.username });
  docRef = refDoc.doc(profile.uid + '/followers/' + uid);
  await docRef.set({ name: data?.name, username: data?.username });
  return { ...profile };
};

export const unFollowUserProfileDocument = async (uid: string, id: string) => {
  const ref1 = firestore.collection(FirestoreCollection.USER_PROFILES).doc(id + '/followings/' + uid);
  ref1.delete();
  const ref2 = firestore.collection(FirestoreCollection.USER_PROFILES).doc(id + '/followers/' + uid);
  ref2.delete();

  return { text: 'Unfollowed successfully' };
};
