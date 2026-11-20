// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC48I7N0m9RRNbRf1JpUDa9oNv-HACqWFg",
  authDomain: "online-job-portal-4983b.firebaseapp.com",
  projectId: "online-job-portal-4983b",
  storageBucket: "online-job-portal-4983b.firebasestorage.app",
  messagingSenderId: "556123371778",
  appId: "1:556123371778:web:7777dcecfdcc328184aa1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};