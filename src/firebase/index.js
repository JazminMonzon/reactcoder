// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  collection,
  setDoc,
  getDocs,
  query, 
  where, 
  doc,
  runTransaction,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANBOD3eyr6t-s4_p1U5yNL9atJEFTR9WA",
  authDomain: "reactcoder-13633.firebaseapp.com",
  projectId: "reactcoder-13633",
  storageBucket: "reactcoder-13633.appspot.com",
  messagingSenderId: "243963978399",
  appId: "1:243963978399:web:c042350acfafaa640af8aa"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export const getCollection = (title) => {
    return getCollectionFromFirebase(db, title)
}

export const getDocs = (collection) => {
    return getDocsFromFirebase(collection)
}

makeQuery('items', 'title', '==', 'Remera Abbey Road')

export const makeQuery = (titleDb, field, condition, value) => {
const ref = getCollection(titleDb)
return query(ref, where(field, condition, value))
}