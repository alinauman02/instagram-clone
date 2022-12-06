import {
  followUserProfileDocument,
  getFOllowedByUserProfilesDocument,
  getFollowingUserProfilesDocument,
  unFollowUserProfileDocument,
} from '.';
import { FollowRequestPlayLoad } from './follow.model';

export function getFOllowedByUserProfilesService(username: string) {
  return getFOllowedByUserProfilesDocument(username);
}

export function getFollowingUserProfilesService(username: string) {
  return getFollowingUserProfilesDocument(username);
}

export function followUserProfileService(uid: string, userProfile: FollowRequestPlayLoad) {
  return followUserProfileDocument(uid, userProfile);
}

export function unFollowUserProfileService(uid: string, username: string) {
  return unFollowUserProfileDocument(uid, username);
}
