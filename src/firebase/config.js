// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkiotXy6y23OFLziylXLazndwjhohv30c",
    authDomain: "reviewfinder-ff9d9.firebaseapp.com",
    projectId: "reviewfinder-ff9d9",
    storageBucket: "reviewfinder-ff9d9.appspot.com",
    messagingSenderId: "1087603431090",
    appId: "1:1087603431090:web:8eb2399b90be52aeff9bab",
    measurementId: "G-QCP8DNHPB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);