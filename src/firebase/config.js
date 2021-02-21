import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCbYmTA57GYHfqj3iCn3avq99wEL8j0RVc",
  authDomain: "micahel-firegram.firebaseapp.com",
  projectId: "micahel-firegram",
  storageBucket: "micahel-firegram.appspot.com",
  messagingSenderId: "127551795114",
  appId: "1:127551795114:web:86b1b064ebc5779eeb85d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore}