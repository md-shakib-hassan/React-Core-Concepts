// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlpuINMVndKQS_j6KSZEAx7fZVH9sNNzE",
  authDomain: "react-authentication-316f9.firebaseapp.com",
  projectId: "react-authentication-316f9",
  storageBucket: "react-authentication-316f9.firebasestorage.app",
  messagingSenderId: "1089997152350",
  appId: "1:1089997152350:web:17ee8c62889283a0a594cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

