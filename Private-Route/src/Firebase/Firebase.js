// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcVNiVTTxO9fJzDWNhrZOAbRdCaSOBKHw",
  authDomain: "auth-integration-2a60e.firebaseapp.com",
  projectId: "auth-integration-2a60e",
  storageBucket: "auth-integration-2a60e.firebasestorage.app",
  messagingSenderId: "104200404382",
  appId: "1:104200404382:web:4520b27b7018cf99b92a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);