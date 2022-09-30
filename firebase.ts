// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3X8hWKoPkVyLeM8DjQZ4FOW3vT3atbz4",
  authDomain: "zoquid.firebaseapp.com",
  projectId: "zoquid",
  storageBucket: "zoquid.appspot.com",
  messagingSenderId: "443365025291",
  appId: "1:443365025291:web:d33bb272816e7a8242490e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }