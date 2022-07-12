import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCke3GqqBX1gy3rJwI7YGr9kF5SQ5k4I2M",
  authDomain: "todo-app-711ab.firebaseapp.com",
  projectId: "todo-app-711ab",
  storageBucket: "todo-app-711ab.appspot.com",
  messagingSenderId: "529251883182",
  appId: "1:529251883182:web:40f0abf8d20a1baa85b53f",
  measurementId: "G-P41ELNVBVL"
};

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
  export { db };
 export const auth = getAuth(app);
