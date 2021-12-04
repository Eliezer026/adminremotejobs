import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAIM0KpILeoZejMXZAkhpTVK6R3TG4OZjM",
  authDomain: "remotejobs-e7c44.firebaseapp.com",
  databaseURL: "https://remotejobs-e7c44-default-rtdb.firebaseio.com",
  projectId: "remotejobs-e7c44",
  storageBucket: "remotejobs-e7c44.appspot.com",
  messagingSenderId: "1050175237426",
  appId: "1:1050175237426:web:465ff46f8759e5f1887b2b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
