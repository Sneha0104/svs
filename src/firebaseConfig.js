
//import withFirebaseAuth from 'react-with-firebase-auth'
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBbJrhBSj3QC924fQkbRY-L2FYuPutsanA",
    authDomain: "intcom-a33ee.firebaseapp.com",
    databaseURL: "https://intcom-a33ee.firebaseio.com",
    projectId: "intcom-a33ee",
    storageBucket: "intcom-a33ee.appspot.com",
    messagingSenderId: "147925101589",
    appId: "1:147925101589:web:67d769ac6f96b126d0f21c"

};

const firebaseApp = firebase.initializeApp(config);

const database = firebase.database();

export default firebaseApp;