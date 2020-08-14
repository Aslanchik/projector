import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1Mu9LFaMZpDbnFr0SzLBmr-sIz15_hzw",
  authDomain: "projector-b4d29.firebaseapp.com",
  databaseURL: "https://projector-b4d29.firebaseio.com",
  projectId: "projector-b4d29",
  storageBucket: "projector-b4d29.appspot.com",
  messagingSenderId: "311145393721",
  appId: "1:311145393721:web:4d1230de7a29018736a7e8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize firestore
firebase.firestore();

export default firebase;
