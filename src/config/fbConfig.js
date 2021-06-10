import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyChTsMIxxKFNftr6sPhTfj88MbwUgoZ-PM",
    authDomain: "myplan-e6acd.firebaseapp.com",
    projectId: "myplan-e6acd",
    storageBucket: "myplan-e6acd.appspot.com",
    messagingSenderId: "308764525263",
    appId: "1:308764525263:web:5802a6bba59c516334edba",
    measurementId: "G-73CBKGEW28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;