// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyChee5bCBEYNTDiQTKCxYWQ7LwD92ynvfE",

  authDomain: "cvgenerator-4ae2e.firebaseapp.com",

  databaseURL:
    "https://cvgenerator-4ae2e-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "cvgenerator-4ae2e",

  storageBucket: "cvgenerator-4ae2e.appspot.com",

  messagingSenderId: "770216208701",

  appId: "1:770216208701:web:3e6feadda18f066479fd54",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
