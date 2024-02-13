// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-910fe.firebaseapp.com",
  projectId: "mern-auth-910fe",
  storageBucket: "mern-auth-910fe.appspot.com",
  messagingSenderId: "535172039240",
  appId: "1:535172039240:web:8a69b8efbaa0971e364e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);