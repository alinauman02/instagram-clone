import * as admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import * as functions from 'firebase-functions';

admin.initializeApp();
const firestore = getFirestore();
firestore.settings({ ignoreUndefinedProperties: true });
const auth = getAuth();
export { functions, firestore, auth };
