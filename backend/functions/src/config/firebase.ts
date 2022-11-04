import * as functions from 'firebase-functions';
import { getFirestore } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';

const app = admin.initializeApp();
const firestore = getFirestore();

export { functions, firestore };
