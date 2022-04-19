// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGs7D8YVAnQ3XaUUZDGdBjWHdwPiLUbVk',
  authDomain: 'uber-nextjs-project.firebaseapp.com',
  projectId: 'uber-nextjs-project',
  storageBucket: 'uber-nextjs-project.appspot.com',
  messagingSenderId: '699273741668',
  appId: '1:699273741668:web:a36339dba503a43d17a671',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
