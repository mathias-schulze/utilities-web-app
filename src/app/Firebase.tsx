import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQIvoPtRM3gX7OVpCkrY8LPdwSV1oLpCE",
  authDomain: "mszutils.firebaseapp.com",
  projectId: "mszutils",
  storageBucket: "mszutils.appspot.com",
  messagingSenderId: "657355305853",
  appId: "1:657355305853:web:7b024b384b899e51fe9214",
  measurementId: "G-7XLK9C4FYY"
};
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth;
export const firestore = firebase.firestore();