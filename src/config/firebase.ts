// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAou5sCmqAW4Jds77CXsJ3xv1cOdbiPq5Y',
  authDomain: 'booking-app-project-6c60a.firebaseapp.com',
  projectId: 'booking-app-project-6c60a',
  storageBucket: 'booking-app-project-6c60a.firebasestorage.app',
  messagingSenderId: '222163765914',
  appId: '1:222163765914:web:86ca1911b8541b1830ed23',
  measurementId: 'G-GP3T658MF2',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
