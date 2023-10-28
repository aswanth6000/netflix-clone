import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlIGBIHCB3LTvgfTjBs4czyTKhdmY0TXI",
    authDomain: "shaped-manifest-368607.firebaseapp.com",
    projectId: "shaped-manifest-368607",
    storageBucket: "shaped-manifest-368607.appspot.com",
    messagingSenderId: "819866110218",
    appId: "1:819866110218:web:dda76bba2b3924b0fdd2f3",
    measurementId: "G-L09EJG18W4"
  };

  const FirebaseConfig = initializeApp(firebaseConfig);
  export const firebase = {getAuth,signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, FirebaseConfig} 