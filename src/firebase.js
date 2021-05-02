import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAfftIb1daTuGvputUlU1LdHSFQSsrY_Ns",
    authDomain: "portfolio-1b3d4.firebaseapp.com",
    databaseURL: "https://portfolio-1b3d4.firebaseio.com",
    projectId: "portfolio-1b3d4",
    storageBucket: "portfolio-1b3d4.appspot.com",
    messagingSenderId: "321246014449",
    appId: "1:321246014449:web:b0bae2ea77a6522cc93250",
    measurementId: "G-60ET1GEPDS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google SSO
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
    auth, 
    signInWithGoogle
}