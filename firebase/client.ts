// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1d42SlH7fgI7cDqcwEoYIAS4we0Jow34",
  authDomain: "prepwise-417a4.firebaseapp.com",
  projectId: "prepwise-417a4",
  storageBucket: "prepwise-417a4.firebasestorage.app",
  messagingSenderId: "32691756822",
  appId: "1:32691756822:web:4a48891905d915437f7a37",
  measurementId: "G-3J6XB2JF37"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);