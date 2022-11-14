export function setCommonFieldsDocument(obj: Record<string,unknown> ) {
  const date: Date = new Date();
  return { ...obj, updatedAt: date, createdAt: date, isDeleted: false };
}
