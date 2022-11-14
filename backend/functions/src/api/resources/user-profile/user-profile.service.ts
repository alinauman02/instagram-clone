import { UserProfile } from '.';
import { getUserProfileDocument, updateUserProfileDocument } from './';

export async function getUserProfileService(uid: string) {
  const getProfile = await getUserProfileDocument(uid);
  return getProfile;
}

export function updateUserProfileService(uid: string, userProfile: UserProfile) {
  return updateUserProfileDocument(uid, userProfile);
}
