import firebase from "firebase/app";
import "firebase/auth";

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyD3MWMGHrOAdBSwuMENZ4VCXpLyzkRR-Eo",
  authDomain: "bento-574ad.firebaseapp.com",
  databaseURL: "https://bento-574ad.firebaseio.com",
  projectId: "bento-574ad",
  storageBucket: "bento-574ad.appspot.com",
  messagingSenderId: "682934584639",
  appId: "1:682934584639:web:6e636e3ae0efddab"
};

firebase.initializeApp(config);
