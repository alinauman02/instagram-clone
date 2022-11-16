import { UserProfile, getUserProfileDocument, updateUserProfileDocument } from '.';

export function getUserProfileService(uid: string) {
  return  getUserProfileDocument(uid);
}

export function updateUserProfileService(uid: string, userProfile: UserProfile) {
  return updateUserProfileDocument(uid, userProfile);
}
