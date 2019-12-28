import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC3yJOwbZku74gAJF3et_MMp7dO4pixuRI",
    authDomain: "chit-chat-e4669.firebaseapp.com",
    databaseURL: "https://chit-chat-e4669.firebaseio.com",
    projectId: "chit-chat-e4669",
    storageBucket: "chit-chat-e4669.appspot.com",
    messagingSenderId: "934941408435",
    appId: "1:934941408435:web:2605431cffec7ab78704c6",
    measurementId: "G-S0WV3PYYXY"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;
