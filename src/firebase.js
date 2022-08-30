// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
// import { Auth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBsp9OYX_GE-OAuSBV2ymsCAYOuY4sYYFs",
  authDomain: "ms-cosmetics-store.firebaseapp.com",
  projectId: "ms-cosmetics-store",
  storageBucket: "ms-cosmetics-store.appspot.com",
  messagingSenderId: "1019123397263",
  appId: "1:1019123397263:web:459e088261dfe88f7036fa",
  measurementId: "G-2LZ7ZZZVHW"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
export { app, auth,db }
