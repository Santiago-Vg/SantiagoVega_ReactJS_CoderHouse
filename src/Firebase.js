import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC-fgKG5DVlM1bcdnCSFGooZRcnnaDoXx0",
  authDomain: "buncits-41df0.firebaseapp.com",
  projectId: "buncits-41df0",
  storageBucket: "buncits-41df0.appspot.com",
  messagingSenderId: "1000442280075",
  appId: "1:1000442280075:web:2386ed9af7d05059287c8e",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
