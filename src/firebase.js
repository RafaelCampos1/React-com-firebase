import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYKGqUoMy8vP4klPsxzqD4g3UF62HRu-Q",
    authDomain: "projetoreact-a514f.firebaseapp.com",
    projectId: "projetoreact-a514f",
    storageBucket: "projetoreact-a514f.appspot.com",
    messagingSenderId: "175010353166",
    appId: "1:175010353166:web:b277142125a5f606c02c5f",
    measurementId: "G-8086MXD5Y6"
  };

  firebase.initializeApp(firebaseConfig);
  
  export const database = firebase.firestore();
  export const myAuth = firebase.auth();