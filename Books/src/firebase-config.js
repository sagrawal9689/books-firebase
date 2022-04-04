import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHCn2RugOOCvZej4jT7hc7qpcwLpQGu04",
  authDomain: "books-b4c3f.firebaseapp.com",
  projectId: "books-b4c3f",
  storageBucket: "books-b4c3f.appspot.com",
  messagingSenderId: "362007152155",
  appId: "1:362007152155:web:ec178dfe9b853a3be1dabe",
  measurementId: "G-D2T4B14JPJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
