// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVdpNnMnhWOYyqqkXbCESNtKhbpl9KI8Y",
    authDomain: "explore-email-login.firebaseapp.com",
    projectId: "explore-email-login",
    storageBucket: "explore-email-login.firebasestorage.app",
    messagingSenderId: "589413283355",
    appId: "1:589413283355:web:2dd36305cace5a6d28eabe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);