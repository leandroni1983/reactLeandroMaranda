// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "flawless-energy-357723.firebaseapp.com",
  projectId: "flawless-energy-357723",
  storageBucket: "flawless-energy-357723.appspot.com",
  messagingSenderId: "453982059651",
  appId: "1:453982059651:web:ebf2d57a19ebd104cdefb6",
  measurementId: "G-RS067D58FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);


export {db,app,auth};

