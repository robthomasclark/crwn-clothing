import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { ShopState } from "../types/states";

const firebaseConfig = {
  apiKey: "AIzaSyDGwGPPYWg5MoivT2cH40D2FbRy-V07dU0",
  authDomain: "crown-db-aba36.firebaseapp.com",
  projectId: "crown-db-aba36",
  storageBucket: "crown-db-aba36.appspot.com",
  messagingSenderId: "467241340829",
  appId: "1:467241340829:web:6200530451c2934f1b6974",
  measurementId: "G-8J461PJPEF",
};

export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData: {}
) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ShopState
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  Object.entries(objectsToAdd).forEach((item) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    console.log(item[0], item[1]);
    const obj = { title: item[1].title, items: item[1].items };
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (
  collections: firebase.firestore.QuerySnapshot
) => {
  const transformedCollection = collections.docs.map((doc) => {
    const title = doc.data().title as string;
    const items = doc.data().items;
    //const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log("Transformed:", transformedCollection);
  //const object = Object.assign({}, ...transformedCollection);
  //console.log("Transformed Object", object);

  var accumulator: Record<string, any> = {};

  transformedCollection.forEach((element) => {
    accumulator[element.title.toLowerCase()] = element;
  });

  console.log("Transformed to Object:", accumulator);
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
