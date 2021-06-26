import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBOP7UhsHS9hjHuzeFL9XmewGksYUSiAWU",
    authDomain: "attendance-81a94.firebaseapp.com",
    projectId: "attendance-81a94",
    storageBucket: "attendance-81a94.appspot.com",
    messagingSenderId: "908343495524",
    appId: "1:908343495524:web:09bbed13afcc50a5860871"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;