
//import withFirebaseAuth from 'react-with-firebase-auth'
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyARfQzMZATNuwkYUTRLK6VSDJbhJh8fzww",
  authDomain: "devchat-115c4.firebaseapp.com",
  databaseURL: "https://devchat-115c4.firebaseio.com",
  storageBucket: "devchat-115c4.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);

const database = firebase.database();

export default firebaseApp;