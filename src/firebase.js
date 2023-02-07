import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCR9cYaSMNvIa5sHIEbRbG5Sl_M1vQiCE",
  authDomain: "react-chat-app-bbb66.firebaseapp.com",
  projectId: "react-chat-app-bbb66",
  storageBucket: "react-chat-app-bbb66.appspot.com",
  messagingSenderId: "12353192635",
  appId: "1:12353192635:web:9cc1b53118f7254d2ddf9e",
  measurementId: "G-EVSQR0LJVV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
