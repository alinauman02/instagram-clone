import { getUserProfileDocument, patchUserProfileDocument } from '../resources/dal/user-profile.dal';
import { UserProfile } from '../resources/user-profile';

export async function getUserProfileService(uid: string) {
  const getProfile = await getUserProfileDocument(uid);
  console.log(getProfile);
  return getProfile;
}

export async function patchUserProfileService(uid: string, userProfile: UserProfile) {
  const getProfile = await patchUserProfileDocument(uid, userProfile);
  console.log(getProfile);
  return getProfile;
}
