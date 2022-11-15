import { UserProfile } from '../api/resources/user-profile';

export function setUpdatedAtDocument(obj: Record<string, unknown> | UserProfile) {
  return { ...obj, updatedAt: new Date() };
}
