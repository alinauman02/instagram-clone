import { getUserProfileDocument } from '../resources/dal/user-profile.dal';

export async function getUserProfileService(uid: string) {
  const getProfile = await getUserProfileDocument(uid);
  console.log(getProfile);
  return getProfile;
}
