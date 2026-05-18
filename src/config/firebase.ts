import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore'; // Reemplaza getFirestore por initializeFirestore
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

// FORZAMOS A FIRESTORE A TRABAJAR 100% ONLINE SIN USAR LA CACHÉ DAÑADA DEL NAVEGADOR
export const db = initializeFirestore(app, {
  localCache: {
    kind: 'persistent',
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  }
});

export const rtdb = getDatabase(app);