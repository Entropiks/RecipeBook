import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBjUQiBX1idE7YFX7TVb0EA8C1x8Wh4ZM0",
    authDomain: "recipebook-a37c0.firebaseapp.com",
    projectId: "recipebook-a37c0",
    storageBucket: "recipebook-a37c0.appspot.com",
    messagingSenderId: "176381544706",
    appId: "1:176381544706:web:dcd8a08fde5f6dafc8da1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
