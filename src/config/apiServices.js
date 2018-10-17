import * as firebase from 'firebase';

import {
  getUser,
} from '../selectors';

export const whenDataIsAdded = () => {
  firebase.database().ref(`/collection/${getUser().uid}`).on("child_added", (snapshot) => { 
    var objectToPush = snapshot.val();
    objectToPush.key = snapshot.key;
  });
}
