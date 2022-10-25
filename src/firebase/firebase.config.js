// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc14petgOQCCAjLNwBmj9nm4b-q3P_xNQ",
  authDomain: "lerning-platform.firebaseapp.com",
  projectId: "lerning-platform",
  storageBucket: "lerning-platform.appspot.com",
  messagingSenderId: "298343516640",
  appId: "1:298343516640:web:ccd20f742c6bc4ed21c385",
  measurementId: "G-BZYX2DESBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app;
