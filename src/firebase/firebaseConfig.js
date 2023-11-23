// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuEq1PsI6zGuuAPURsZ830pv_BQJaNKhg",
  authDomain: "forum-e3e2b.firebaseapp.com",
  projectId: "forum-e3e2b",
  storageBucket: "forum-e3e2b.appspot.com",
  messagingSenderId: "735214213895",
  appId: "1:735214213895:web:02746ed034ce7fd83343a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth=getAuth(app)
 export default auth;