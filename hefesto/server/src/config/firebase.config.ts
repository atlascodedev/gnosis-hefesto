import envinronment from "./core.config";

export const firebaseConfig = {
  apiKey: envinronment.FIREBASE_API_KEY,
  authDomain: envinronment.FIREBASE_AUTH_DOMAIN,
  projectId: envinronment.FIREBASE_PROJECT_ID,
  storageBucket: envinronment.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envinronment.FIREBASE_MESSAGING_SENDER_ID,
  appId: envinronment.FIREBASE_APP_ID,
  measurementId: envinronment.FIREBASE_MEASUREMENT_ID,
  locationId: envinronment.FIREBASE_LOCATION_ID,
};
