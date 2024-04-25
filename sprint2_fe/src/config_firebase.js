// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1B2qcmr75GSJUhcoxAY_IDgnRlF5i-nY",
    authDomain: "img-helios.firebaseapp.com",
    projectId: "img-helios",
    storageBucket: "img-helios.appspot.com",
    messagingSenderId: "584856180742",
    appId: "1:584856180742:web:7b6148d89ae4fde060cb87",
    measurementId: "G-Y2Y116N59D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)