import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGwGPPYWg5MoivT2cH40D2FbRy-V07dU0",
  authDomain: "crown-db-aba36.firebaseapp.com",
  projectId: "crown-db-aba36",
  storageBucket: "crown-db-aba36.appspot.com",
  messagingSenderId: "467241340829",
  appId: "1:467241340829:web:6200530451c2934f1b6974",
  measurementId: "G-8J461PJPEF",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


