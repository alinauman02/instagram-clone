export function onCreateDocument(obj: object) {
  const date: Date = new Date();
  return Object.assign(obj, { updatedAt: date });
}
