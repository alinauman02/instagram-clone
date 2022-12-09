import { followUserProfileDocument, removeFollowUserProfileDocument, unFollowUserProfileDocument } from '.';

export function followUserProfileService(username: string, uid: string) {
  return followUserProfileDocument(username, uid);
}

export function unFollowUserProfileService(username: string, uid: string) {
  return unFollowUserProfileDocument(username, uid);
}

export function removeFollowUserProfileService(username: string, uid: string) {
  return removeFollowUserProfileDocument(username, uid);
}
