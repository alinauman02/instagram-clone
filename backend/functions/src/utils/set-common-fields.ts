export function setCommonFieldsDocument(obj: Object) {
  const date: Date = new Date();
  return { ...obj, updatedAt: date, createdAt: date, isDeleted: false };
}
