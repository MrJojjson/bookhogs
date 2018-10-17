import * as firebase from 'firebase';

const firebaseConfig = {
  
};

var firebaseApp = null;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;