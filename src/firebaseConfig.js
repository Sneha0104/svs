
//import withFirebaseAuth from 'react-with-firebase-auth'
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: ''
};

const firebaseApp = firebase.initializeApp(config);

const database = firebase.database();

export default firebaseApp;