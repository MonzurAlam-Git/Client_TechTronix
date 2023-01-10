// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTKG_rwIHwMPp4qYqx6xGHxMxFsFeCTRE",
    authDomain: "techtronix-bffac.firebaseapp.com",
    projectId: "techtronix-bffac",
    storageBucket: "techtronix-bffac.appspot.com",
    messagingSenderId: "216627329326",
    appId: "1:216627329326:web:d3e6531670395ac055e2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;