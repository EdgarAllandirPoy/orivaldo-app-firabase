// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtC1JjV4qpPe62Wmvrw69lsWgc2IuKiQo",
    authDomain: "meuprojeto-d7ff7.firebaseapp.com",
    projectId: "meuprojeto-d7ff7",
    storageBucket: "meuprojeto-d7ff7.appspot.com",
    messagingSenderId: "949324429195",
    appId: "1:949324429195:web:17161f43b8fb83c8bfe18e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth, firestore };