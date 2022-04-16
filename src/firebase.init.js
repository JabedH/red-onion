// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfztX6opGdGH4JJetPUyAGXbUATto83kA",
  authDomain: "red-onion-b8afd.firebaseapp.com",
  projectId: "red-onion-b8afd",
  storageBucket: "red-onion-b8afd.appspot.com",
  messagingSenderId: "1093130168231",
  appId: "1:1093130168231:web:a734335f09707b0facf882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
