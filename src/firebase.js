// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { Auth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCjGiovIM0JtplcpQQ24cbmLdLstpQnnRU',
  authDomain: 'webcommerce-f85da.firebaseapp.com',
  projectId: 'webcommerce-f85da',
  storageBucket: 'webcommerce-f85da.appspot.com',
  messagingSenderId: '950519592814',
  appId: '1:950519592814:web:932d215cb9d819cce9337f',
  measurementId: 'G-S5QFQLWY38',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
export { app, auth }
