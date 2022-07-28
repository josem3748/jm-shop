// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC93Jc3guRqYlDngbDTn0CHRWNHzZKGYC0",
  authDomain: "jm-shop-firebase.firebaseapp.com",
  projectId: "jm-shop-firebase",
  storageBucket: "jm-shop-firebase.appspot.com",
  messagingSenderId: "551694469118",
  appId: "1:551694469118:web:4ea82a6513b312c10f62af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
