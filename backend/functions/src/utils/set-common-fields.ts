import { UserProfile } from '../api/resources/user-profile';

export function setCommonFieldsDocument(obj: Record<string, unknown> | UserProfile) {
  const date: Date = new Date();
  return { ...obj, updatedAt: date, createdAt: date, isDeleted: false };
}
