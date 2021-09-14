// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVGwdBu-mLdQrPjZYvX9jO0E6B29h5fs",
  authDomain: "reactfinalproject-90874.firebaseapp.com",
  projectId: "reactfinalproject-90874",
  storageBucket: "reactfinalproject-90874.appspot.com",
  messagingSenderId: "76350330959",
  appId: "1:76350330959:web:40485443c213c84469f23a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
