// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJbH4omtvb9oH7imqBxpkPs0aWgPGS74o",
  authDomain: "firefist-projects.firebaseapp.com",
  projectId: "firefist-projects",
  storageBucket: "firefist-projects.firebasestorage.app",
  messagingSenderId: "131216723120",
  appId: "1:131216723120:web:d6e718633846561d523f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
  
  // document query
const q = query(collection(db, "projects"));


export {db, app, q };
