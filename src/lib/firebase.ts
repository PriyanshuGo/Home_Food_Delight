// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier  } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfAqhLrXW8sd6EvIqwOGWz27LR_WJepow",
  authDomain: "homefooddelight-a2c5f.firebaseapp.com",
  projectId: "homefooddelight-a2c5f",
  storageBucket: "homefooddelight-a2c5f.firebasestorage.app",
  messagingSenderId: "509127683278",
  appId: "1:509127683278:web:cb92288880a0356843b49f",
  measurementId: "G-K71J30S3FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier  };
