// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD7gFq3drCQzC_WnroHEiBp5VJJNm-JU4",
  authDomain: "netflix-161c7.firebaseapp.com",
  projectId: "netflix-161c7",
  storageBucket: "netflix-161c7.firebasestorage.app",
  messagingSenderId: "17206173029",
  appId: "1:17206173029:web:941ad207b5c75daab1158c",
  measurementId: "G-V1W42DKFS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();