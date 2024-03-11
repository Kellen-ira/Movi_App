// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQeQqx4vhxGiWK7BiZdySc1UO2ELWNVho",
  authDomain: "movidb-3d5c0.firebaseapp.com",
  projectId: "movidb-3d5c0",
  storageBucket: "movidb-3d5c0.appspot.com",
  messagingSenderId: "375274538972",
  appId: "1:375274538972:web:8a65385e3240997eadb119"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =getAuth(FIREBASE_APP)