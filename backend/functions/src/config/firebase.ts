import * as functions from 'firebase-functions';
import { getFirestore } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';

admin.initializeApp();
const firestore = getFirestore();

export { functions, firestore };
