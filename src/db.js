import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA_QyB4DxfKmCua-qYMLp5pRcd_V39q2XA",
  authDomain: "vue-crud-app-1d717.firebaseapp.com",
  databaseURL: "https://vue-crud-app-1d717.firebaseio.com",
  projectId: "vue-crud-app-1d717",
  storageBucket: "vue-crud-app-1d717.appspot.com",
  messagingSenderId: "240862204630",
  appId: "1:240862204630:web:29886ef8c63b524d7f6f77"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let db = firebase.firestore();

export default db;
