// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT5RaRriMSg20rBdImiUDLucq0gb3rV6M",
  authDomain: "pair-30-dts.firebaseapp.com",
  projectId: "pair-30-dts",
  storageBucket: "pair-30-dts.appspot.com",
  messagingSenderId: "896120586548",
  appId: "1:896120586548:web:292b52deff3de5bf3d6561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };