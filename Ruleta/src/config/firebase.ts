import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCcH6B3SqafCvX_8b4EQvfxhRyZAQFbDSg",
  authDomain: "ruleta-multiplayer.firebaseapp.com",
  databaseURL: "https://ruleta-multiplayer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ruleta-multiplayer",
  storageBucket: "ruleta-multiplayer.firebasestorage.app",
  messagingSenderId: "463162815348",
  appId: "1:463162815348:web:da85d70e198bd72b93f221",
  measurementId: "G-WQZZ97K6BY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);