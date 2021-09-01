import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANBOD3eyr6t-s4_p1U5yNL9atJEFTR9WA",
  authDomain: "reactcoder-13633.firebaseapp.com",
  projectId: "reactcoder-13633",
  storageBucket: "reactcoder-13633.appspot.com",
  messagingSenderId: "243963978399",
  appId: "1:243963978399:web:c042350acfafaa640af8aa"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();