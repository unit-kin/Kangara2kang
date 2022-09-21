// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDjb6yNr8N1Oovik1z4cSl6pKl2dph0EpY",

  authDomain: "shoe-c3679.firebaseapp.com",

  projectId: "shoe-c3679",

  storageBucket: "shoe-c3679.appspot.com",

  messagingSenderId: "415076126133",

  appId: "1:415076126133:web:dcefe7572bae63dd2eddfc"

};


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}
