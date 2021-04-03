import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAAIbIlogTevtyml2OzEQV2ogKBm5QQMGM",
  authDomain: "barter-app-aabcd.firebaseapp.com",
  projectId: "barter-app-aabcd",
  storageBucket: "barter-app-aabcd.appspot.com",
  messagingSenderId: "994397865059",
  appId: "1:994397865059:web:841c82f8f47f4f15142456"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();