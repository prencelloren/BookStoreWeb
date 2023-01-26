import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyApaIW7vLHjleLQ9IKZq4YSK2R5OTV4pfg",
    authDomain: "bookstorewebsite-7803e.firebaseapp.com",
    projectId: "bookstorewebsite-7803e",
    storageBucket: "bookstorewebsite-7803e.appspot.com",
    messagingSenderId: "1059890491891",
    appId: "1:1059890491891:web:7573ca2710d74429ffe286",
    measurementId: "G-BS98QVCK7Q"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;