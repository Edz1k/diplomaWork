// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYubmF94VKy__htLv68GPlaEMDWGrUsQk',
  authDomain: 'diploma-af35f.firebaseapp.com',
  projectId: 'diploma-af35f',
  storageBucket: 'diploma-af35f.appspot.com',
  messagingSenderId: '384917310197',
  appId: '1:384917310197:web:bee17e5e413d77218a53bc'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
