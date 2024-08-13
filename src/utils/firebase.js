import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDnAPvuRqVcPPlZhy8vEc3lMSUQHIaaLA",
  authDomain: "netflixgpt-3801b.firebaseapp.com",
  projectId: "netflixgpt-3801b",
  storageBucket: "netflixgpt-3801b.appspot.com",
  messagingSenderId: "37924541970",
  appId: "1:37924541970:web:762088ca43a62075eeeacb",
  measurementId: "G-96SG5JJKMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
