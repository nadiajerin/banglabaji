// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9DlUVv1vQZAB_IwuxXUVTQUGefAGxdZY",
  authDomain: "allsaints-ece40.firebaseapp.com",
  projectId: "allsaints-ece40",
  storageBucket: "allsaints-ece40.firebasestorage.app",
  messagingSenderId: "822200808116",
  appId: "1:822200808116:web:0346ad1f7a51e7340d9de1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;