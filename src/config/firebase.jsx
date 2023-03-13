import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIkFWG_veMgkxUoQJhHLKuOGiNbVdiZk4",
  authDomain: "portfolio-app-6c813.firebaseapp.com",
  projectId: "portfolio-app-6c813",
  storageBucket: "portfolio-app-6c813.appspot.com",
  messagingSenderId: "907690950204",
  appId: "1:907690950204:web:e78321865036c961e88d39",
  measurementId: "G-6HQZ0L2B6R"
};

const app = initializeApp(firebaseConfig);

//for database
export const db = getFirestore(app);
