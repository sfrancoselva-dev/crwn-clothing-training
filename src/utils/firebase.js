import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDTuyOlYLemA28Hqq3vLUofc2Sz4N_4QiM",
    authDomain: "crwn-clothing-practice-main.firebaseapp.com",
    projectId: "crwn-clothing-practice-main",
    storageBucket: "crwn-clothing-practice-main.appspot.com",
    messagingSenderId: "464497542358",
    appId: "1:464497542358:web:2d2bb48216c3fbd2657577"
  };

  
  const firebaseApp = initializeApp(firebaseConfig);


  export const auth = getAuth();

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

export const signInWithGooglePopup = async () => {
      return await signInWithPopup(auth, provider);
}

const db = getFirestore();

export const createFbDocFromAuth = async (user) => {
  const docRef = doc(db, 'users', user.uid);
  const docSnapShot = await getDoc(docRef);
  
  if(!docSnapShot.exists()) {
    const {displayName, email} = user;
    const date = new Date();
    
    try {
        await setDoc(docRef, {
          displayName,
          email,
          date
        })  
    } catch(err) {
      console.error('failed to create document', err)
    }
  }
  return docRef;
}


export const createUserWithEmailAndPasswordFromAuth = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}

export const signInWithEmailAndPasswordCustom = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);


export const authStateChangedInterface = (callback) => onAuthStateChanged(auth, callback)


export const addCollectionAndDocuments = async (collectionKey, objects) => {

  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  
  [...objects].forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');

}

export const getCategoriesAndDocuments = async () => {
 
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const docSnapShot = await getDocs(q);

  const queryMap = docSnapShot.docs.reduce((acc, doc) => {
    const {title, items} = doc.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
  return queryMap;
}