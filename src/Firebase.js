import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHGph90tC09NINIktGlin4z_sHJUwJsdQ",
    authDomain: "linkedin-akramee.firebaseapp.com",
    projectId: "linkedin-akramee",
    storageBucket: "linkedin-akramee.appspot.com",
    messagingSenderId: "429798725609",
    appId: "1:429798725609:web:220512b4cda5ed5dfadd78",
    measurementId: "G-81HQ5GQ5RM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };