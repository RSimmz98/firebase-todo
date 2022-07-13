// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCke3GqqBX1gy3rJwI7YGr9kF5SQ5k4I2M",
  authDomain: "todo-app-711ab.firebaseapp.com",
  projectId: "todo-app-711ab",
  storageBucket: "todo-app-711ab.appspot.com",
  messagingSenderId: "529251883182",
  appId: "1:529251883182:web:40f0abf8d20a1baa85b53f",
  measurementId: "G-P41ELNVBVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

const db = getFirestore(app);
 export { db };


