// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfejSvm1Kk2tsc7fIjA-b5KMew5oI02OA",
  authDomain: "khaled-ghonim-translation.firebaseapp.com",
  projectId: "khaled-ghonim-translation",
  storageBucket: "khaled-ghonim-translation.appspot.com",
  messagingSenderId: "197844989738",
  appId: "1:197844989738:web:515544f243329ef3efd053"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
