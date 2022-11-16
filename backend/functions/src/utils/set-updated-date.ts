export function setUpdatedAtDocument(obj: Object) {
  return { ...obj, updatedAt: new Date() };
}
