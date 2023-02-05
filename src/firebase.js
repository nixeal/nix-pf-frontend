// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndGFS62Ew4STiscQMHz2z-OaqKeUkSxk",
  authDomain: "folio-40b69.firebaseapp.com",
  projectId: "folio-40b69",
  storageBucket: "folio-40b69.appspot.com",
  messagingSenderId: "1006942204515",
  appId: "1:1006942204515:web:590e476ecd36d95642be56",
  measurementId: "G-ZKYPTRK1X3"
};

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
   const analytics = getAnalytics(app);
    

export{auth, analytics}