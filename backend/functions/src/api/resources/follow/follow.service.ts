import {
  followUserProfileDocument,
  getFOllowedByUserProfilesDocument,
  getFollowingUserProfilesDocument,
  unFollowUserProfileDocument,
} from '.';

export function getFOllowedByUserProfilesService(username: string) {
  return getFOllowedByUserProfilesDocument(username);
}

export function getFollowingUserProfilesService(username: string) {
  return getFollowingUserProfilesDocument(username);
}

export function followUserProfileService(username: string, uid: string) {
  return followUserProfileDocument(username, uid);
}

export function unFollowUserProfileService(username: string, uid: string) {
  return unFollowUserProfileDocument(username, uid);
}

export function removeFollowUserProfileService(username: string, uid: string) {
  return unFollowUserProfileDocument(username, uid);
}
