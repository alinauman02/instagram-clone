import * as functions from 'firebase-functions';
import { getFirestore } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

admin.initializeApp();
const firestore = getFirestore();
const auth = getAuth();
export { functions, firestore, auth };
