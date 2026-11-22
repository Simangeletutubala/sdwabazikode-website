import {
  initializeApp,
  applicationDefault,
  getApps,
} from 'firebase-admin/app';

import { getFirestore } from 'firebase-admin/firestore';

const adminApp = getApps().length
  ? getApps()[0]
  : initializeApp({
      credential: applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });

export const adminDb = getFirestore(adminApp);
