// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbKcgpckWWjktYpnVQakszhNFTwkJ0TX4",
  authDomain: "health-connect-1c27b.firebaseapp.com",
  projectId: "health-connect-1c27b",
  storageBucket: "health-connect-1c27b.appspot.com",
  messagingSenderId: "576322203711",
  appId: "1:576322203711:web:94ab2499771a6df1f7c88a",
  measurementId: "G-GL82JXFW47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);
const storage = getStorage(app);
export { auth,db,storage };