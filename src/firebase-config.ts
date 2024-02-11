// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMXabBeK-2ucBQPhv2REpZ0RPkxU1HyU8",
    authDomain: "Chat-app-8bd19.firebaseapp.com",
    projectId: "Chat-app-8bd19",
    storageBucket: "Chat-app-8bd19.appspot.com",
    messagingSenderId: "46801049761",
    appId: "1:46801049761:web:74129661a8ac9341eeb8e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
