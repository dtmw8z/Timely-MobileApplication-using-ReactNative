//import * as firebase from 'firebase';
const firebase = require('firebase/app').default
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDN0gEMIOLIh_TyB8HzyaNXt9-4knFF1TI",
    authDomain: "student-timetable-8b670.firebaseapp.com",
    databaseURL: "https://student-timetable-8b670-default-rtdb.firebaseio.com",
    projectId: "student-timetable-8b670",
    storageBucket: "student-timetable-8b670.appspot.com",
    messagingSenderId: "820129933730",
    appId: "1:820129933730:web:e3aecc8c1a5e3452f4eafb",
    measurementId: "G-754T7PZJMY"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export { firebase };
