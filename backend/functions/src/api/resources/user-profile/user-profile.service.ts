import { UserProfile } from '.';
import { getUserProfileDocument, updateUserProfileDocument } from '../dal';

export async function getUserProfileService(uid: string) {
  const getProfile = await getUserProfileDocument(uid);
  return getProfile;
}

export async function updateUserProfileService(uid: string, userProfile: UserProfile) {
  const getProfile = await updateUserProfileDocument(uid, userProfile);
  return getProfile;
}
