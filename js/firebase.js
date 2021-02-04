import firebase from "./node_modules/firebase/app";

import "./node_modules/firebase/firestore";

  // Initialize Cloud Firestore through Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCXB1ThmQURMJ8ZVZHXhxTOnFnwZqVN3LE",
    authDomain: "full-projects-stapsteen-vier.firebaseapp.com",
    projectId: "full-projects-stapsteen-vier",
    storageBucket: "full-projects-stapsteen-vier.appspot.com",
    messagingSenderId: "773152759080",
    appId: "1:773152759080:web:bffe40bfd4b9d868a9c41d"
  };
firebase.initializeApp(firebaseConfig);
  
  var db = firebase.firestore();

  console.log("ok");
  console.log(db.collection("Events"));

  

  // authDomain: 'full-projects-stapsteen-vier',