import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAOu8UEsx6kVj9TFgw9_8xEhtnTodEby0w",
    authDomain: "teamproject-eab77.firebaseapp.com",
    projectId: "teamproject-eab77",
    storageBucket: "teamproject-eab77.appspot.com",
    messagingSenderId: "832030859725",
    appId: "1:832030859725:web:a1160f71302c3b90036484"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //int services
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const projectStorage = firebase.storage();

  // timestamp
  const timestamp = firebase.firestore.Timestamp;

  export {projectFirestore, projectAuth, timestamp, projectStorage}