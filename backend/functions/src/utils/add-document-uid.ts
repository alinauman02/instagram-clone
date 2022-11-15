export function addDocumentUid(obj: Record<string,unknown> | undefined, uid: string) {
  return { ...obj, uid };
}
