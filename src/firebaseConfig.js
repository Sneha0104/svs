
//import withFirebaseAuth from 'react-with-firebase-auth'
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
//import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBhZ4iHDh0vfrqCmPVnl8tszew4F78LCZ0',
  authDomain: 'devchat-8253f.firebaseapp.com',
  databaseURL: 'https://devchat-8253f.firebaseio.com',
  storageBucket: 'devchat-8253f.appspot.com'
};

const firebaseApp = firebase.initializeApp(config);

const database = firebase.database();

export default firebaseApp;