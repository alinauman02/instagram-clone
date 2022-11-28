import { getUserProfileDocument, getUserProfileDocumentByUserName, updateUserProfileDocument, UserProfile } from '.';

export function getUserProfileService(uid: string) {
  return getUserProfileDocument(uid);
}

export function getUserProfileServiceByUserName(username: string) {
  return getUserProfileDocumentByUserName(username);
}

export function updateUserProfileService(uid: string, userProfile: UserProfile) {
  return updateUserProfileDocument(uid, userProfile);
}
