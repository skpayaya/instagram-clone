import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//here i want to import the seed file

const firebaseConfig = {
    apiKey: "AIzaSyA_dWowvXlf0gfad3V1OummQQkmtEpx1KY",
    authDomain: "instagram-clone-6027d.firebaseapp.com",
    projectId: "instagram-clone-6027d",
    storageBucket: "instagram-clone-6027d.appspot.com",
    messagingSenderId: "733905519435",
    appId: "1:733905519435:web:08e36403d0b523270a1ece",
};

const firebase = Firebase.initializeApp(firebaseConfig); // Initialize Firebase

const { FieldValue } = Firebase.firestore;

//here is where to call the seed file (only ONCE)
// seedDatabase(firebase);

// console.log("firebase", firebase);

export { firebase, FieldValue };
