import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnGndjbH3mG5V3NCB06U7tlwpS1vnC32A",
  authDomain: "sosacm-581f9.firebaseapp.com",
  projectId: "sosacm-581f9",
  storageBucket: "sosacm-581f9.firebasestorage.app",
  messagingSenderId: "774361410562",
  appId: "1:774361410562:web:6afc055706b19efccf0b1b",
  measurementId: "G-X4BWK2XP1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firebase Authentication & Database Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
