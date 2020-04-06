import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyCnc_YIv9KCTKS-hUbH5D0B2E6d5HV5Kos",
    authDomain: "game-meet.firebaseapp.com",
    databaseURL: "https://game-meet.firebaseio.com",
    projectId: "game-meet",
    storageBucket: "game-meet.appspot.com",
    messagingSenderId: "126090824533",
    appId: "1:126090824533:web:d20e7e4f7987b157febddc"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
