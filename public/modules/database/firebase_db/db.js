// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import {firebase} from "/firebase/app";

// Add the Firebase services that you want to use
import "/firebase/auth";
import "/firebase/firestore";


// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWStymfI8lXCTCShWETPOYUDbKN0Gl5DU",
    authDomain: "alpha-beeta.firebaseapp.com",
    databaseURL: "https://alpha-beeta.firebaseio.com",
    projectId: "alpha-beeta",
    storageBucket: "alpha-beeta.appspot.com",
    messagingSenderId: "17769263432",
    appId: "1:17769263432:web:4b9d39c1da03cc3ef0437d",
    measurementId: "G-XNLJ9H2FDX"
  };

  firebase.initializeApp(firebaseConfig);


  //Auth class with some static methods
  export class Auth{

    static isLoggedIn(){
      console.log("not logged in");
    }
  }