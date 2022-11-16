export function docToObj(snapShot: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>) {
  const data = snapShot.data();
  const id = snapShot.id;
  return { ...data, id, updatedAt: data?.updatedAt.toDate(), createdAt: data?.createdAt.toDate() };
}
