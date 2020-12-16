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

export const createUserProfileDocument = async (userAuth: firebase.User, additionalData: {}) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const  {displayName, email } = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }

  }
  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


