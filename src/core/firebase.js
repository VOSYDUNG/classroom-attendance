// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database"
import "firebase/compat/auth"
import "firebase/auth"
import "firebase/storage"
import "firebase/analytics"
import "firebase/performance"
import { getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-jNt2h71-lO5J_gN260vqfeLDPgyHYOA",
  authDomain: "attendance-system-face-rfid.firebaseapp.com",
  databaseURL: "https://attendance-system-face-rfid-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-system-face-rfid",
  storageBucket: "attendance-system-face-rfid.appspot.com",
  messagingSenderId: "841640037534",
  appId: "1:841640037534:web:44e00bd117bec36718ff8f",
  measurementId: "G-VL795FNFW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
const storage = getStorage(app)
const fireStore = getFirestore(app)

export {app, auth, db, storage, fireStore}