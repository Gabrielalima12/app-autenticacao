import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEc1AiokWU6b-B-c4FY7p1HU2rsWQemto",
  authDomain: "app-autenticacao-31124.firebaseapp.com",
  projectId: "app-autenticacao-31124",
  storageBucket: "app-autenticacao-31124.appspot.com",
  messagingSenderId: "309333572856",
  appId: "1:309333572856:web:4ed3706bdfdff6c3ea0f0d"
};

// Initialize Firebase
export const FIRABASE_APP = initializeApp(firebaseConfig);
export const FIRABASE_AUTH = getAuth(FIRABASE_APP);
export const FIRESTORE = getFirestore(FIRABASE_APP);