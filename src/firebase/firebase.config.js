import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBLfoWKsa8MTZlsTF29R_iU915EZvCp0_U",
  authDomain: "jobbox-5cafe.firebaseapp.com",
  projectId: "jobbox-5cafe",
  storageBucket: "jobbox-5cafe.appspot.com",
  messagingSenderId: "729578402047",
  appId: "1:729578402047:web:6f71e60e2a56475b8d1cca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
