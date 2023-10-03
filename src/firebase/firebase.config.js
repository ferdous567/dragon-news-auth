// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBFw-Srt0N7UNJvuEbs3tvtW2hwvR8Yt8",
  authDomain: "dragon-news-auth-448a4.firebaseapp.com",
  projectId: "dragon-news-auth-448a4",
  storageBucket: "dragon-news-auth-448a4.appspot.com",
  messagingSenderId: "999706209241",
  appId: "1:999706209241:web:b94a51830cfd09ffd487c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 
export default auth;