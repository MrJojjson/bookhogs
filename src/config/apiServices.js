import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8ZfC_bBnU8LslTWpQtPFN6mCScpmiI5Y",
  authDomain: "bookhogs-2be58.firebaseapp.com",
  databaseURL: "https://bookhogs-2be58.firebaseio.com",
  storageBucket: "bookhogs-2be58.appspot.com",
};

var firebaseApp = null;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;