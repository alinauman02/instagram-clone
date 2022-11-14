import { getUserProfileDocument, updateUserProfileDocument } from '../api/resources/dal/user-profile.dal';
import { UserProfile } from '../api/resources/user-profile';

export async function getUserProfileService(uid: string) {
  const getProfile = await getUserProfileDocument(uid);
  return getProfile;
}

export async function updateUserProfileService(uid: string, userProfile: UserProfile) {
  const getProfile = await updateUserProfileDocument(uid, userProfile);
  return getProfile;
}
