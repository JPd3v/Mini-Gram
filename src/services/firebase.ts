// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByQcS1r2U8yWYVFamrFn3bg2wXe5Ow7rE',
  authDomain: 'mini-gram.firebaseapp.com',
  projectId: 'mini-gram',
  storageBucket: 'mini-gram.appspot.com',
  messagingSenderId: '745563987431',
  appId: '1:745563987431:web:22630ebd7a2aa455bab142',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
