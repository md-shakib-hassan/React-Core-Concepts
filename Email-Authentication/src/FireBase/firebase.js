// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPoPrnlibA7F5zbXGG8WUjIBjEfOndJQA",
  authDomain: "email-password-authentic-6891d.firebaseapp.com",
  projectId: "email-password-authentic-6891d",
  storageBucket: "email-password-authentic-6891d.firebasestorage.app",
  messagingSenderId: "877018254512",
  appId: "1:877018254512:web:4b40a029e90939a56cff75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);