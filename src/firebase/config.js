import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFxlAue_-qBsM4YZpPTf-8Lg2Cm7NdYQs",
  authDomain: "firestore-f6c8c.firebaseapp.com",
  projectId: "firestore-f6c8c",
  storageBucket: "firestore-f6c8c.appspot.com",
  messagingSenderId: "347254641318",
  appId: "1:347254641318:web:5ad0dadd1054c3176d5a67"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };