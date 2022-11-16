import { UserProfile, getUserProfileDocument, updateUserProfileDocument } from '.';

export async function getUserProfileService(uid: string) {
  return await getUserProfileDocument(uid);
}

export function updateUserProfileService(uid: string, userProfile: UserProfile) {
  return updateUserProfileDocument(uid, userProfile);
}
