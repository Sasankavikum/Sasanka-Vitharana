import * as firebase from 'firebase/app';

const config = 
  {
    apiKey: "AIzaSyD88OwcRA6ZCRKY6RxAsOMCkrzUX1OE-UE",
    authDomain: "personalsite-6fcfb.firebaseapp.com",
    projectId: "personalsite-6fcfb",
    storageBucket: "personalsite-6fcfb.appspot.com",
    messagingSenderId: "213520479757",
    appId: "1:213520479757:web:a86e37d16940863140c744",
    measurementId: "G-HPF53VZMFR"
  }

  firebase.initializeApp(config);

  export default firebase;
