// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcBeOKykMxqP8nXw7LiUxP4nLZOy8uF1Q",
  authDomain: "javascript-4f950.firebaseapp.com",
  projectId: "javascript-4f950",
  storageBucket: "javascript-4f950.appspot.com",
  messagingSenderId: "932450945458",
  appId: "1:932450945458:web:9bb6cd815f7da960ae3cab",
  measurementId: "G-RJ4NZXW4WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);