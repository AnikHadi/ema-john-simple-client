// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyD36060sJW2VfVZIo0RrSoOi4XIS_LJd-I",
  authDomain: "ema-jhon-simple-aac4c.firebaseapp.com",
  projectId: "ema-jhon-simple-aac4c",
  storageBucket: "ema-jhon-simple-aac4c.appspot.com",
  messagingSenderId: "735016057508",
  appId: "1:735016057508:web:25fcaede7bbad0cd18c431",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
