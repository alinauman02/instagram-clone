export function setUpdatedAtDocument(obj: Record<string, unknown>) {
  return { ...obj, updatedAt: new Date() };
}
