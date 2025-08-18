
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration - Hardcoded for Vercel deployment
const firebaseConfig = {
  apiKey: "AIzaSyDf9McCZUd2rAgb6iye14IPqeZh7LSyi_I",
  authDomain: "projecg-e76f5.firebaseapp.com",
  projectId: "projecg-e76f5",
  storageBucket: "projecg-e76f5.appspot.com",
  messagingSenderId: "725481441769",
  appId: "1:725481441769:web:a71ffe09d4b298a44e2378"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
