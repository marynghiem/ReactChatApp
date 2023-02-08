import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5JWlc-HhpGRUcOksb33ieIp4w5fL-C5s",
  authDomain: "chat-app-dd128.firebaseapp.com",
  projectId: "chat-app-dd128",
  storageBucket: "chat-app-dd128.appspot.com",
  messagingSenderId: "556226820556",
  appId: "1:556226820556:web:8f8cec5e4bce1e7a9c0569",
  measurementId: "G-FQBV0S0YDB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
