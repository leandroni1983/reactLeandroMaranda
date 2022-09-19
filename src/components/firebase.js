// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, collection, getDocs, getDoc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore()

const colRef = collection(db,'productos')
const productos = []
getDocs(colRef)
  .then((snapshot)=>{
  
    snapshot.docs.forEach((prod) =>{
      productos.push({...prod.data()})
    })
   })
   .catch((err) =>{console.log(err)})


export {db,app,productos}
