export function docToObj(snapShot: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>) {
  const data = snapShot.data();
  const id = snapShot.id;
  delete data?.createdAt;
  return { ...data, id, updatedAt: data?.updatedAt.toDate() };
}
