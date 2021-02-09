import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDABKOr7atXmr2BM_2ee8e5Gic1L7FzMts",
    authDomain: "crwn-db-5fdbb.firebaseapp.com",
    projectId: "crwn-db-5fdbb",
    storageBucket: "crwn-db-5fdbb.appspot.com",
    messagingSenderId: "709495694566",
    appId: "1:709495694566:web:e27f0e4070cc0802d04727",
    measurementId: "G-H10VJH0G9Q"
  }

  firebase.initializeApp(config)


  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider)

export default firebase;