// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-UntTYRQpNHBdfuXUl66IaJAbcFpTX0s",
  authDomain: "ema-john-simple-e123e.firebaseapp.com",
  projectId: "ema-john-simple-e123e",
  storageBucket: "ema-john-simple-e123e.appspot.com",
  messagingSenderId: "107955894495",
  appId: "1:107955894495:web:f0c5f6aeafb668eb8ad16a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;