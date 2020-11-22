import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export { firebase };

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// Firebase signin
export function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
}

// Firebase collection that contains the store products
export const itemsRef = firestore.collection('items');