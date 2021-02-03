import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8VfVcGFaWIxQY4wirCy9otUBALIokaFw",
  authDomain: "clone-fd820.firebaseapp.com",
  projectId: "clone-fd820",
  storageBucket: "clone-fd820.appspot.com",
  messagingSenderId: "756035501700",
  appId: "1:756035501700:web:741f4a644c485937000cd1",
  measurementId: "G-CTC43HKT47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // real time database
const auth = firebase.auth(); // user authentication

export { db, auth };
