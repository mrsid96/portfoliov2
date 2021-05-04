import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

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
const getAboutSection = async () => {
    const db = firebase.firestore();
    const result = await db.collection("about").doc("Yv8rWhvN4oMwkpj3Q9RQ").get();
    return result.data();
}

const updateSkills = async (skills) => {
    const db = firebase.firestore();
    const result = await db.collection("about").doc("Yv8rWhvN4oMwkpj3Q9RQ").update({
        skills
    });
    console.log("Result ", result);
    console.log("Result Data", result.data());
    return result;
}

const getExperience = async () => {
    const db = firebase.firestore();
    const result = await db.collection("experience").orderBy("id","desc").get();
    return result.docs.map(item => item.data());
}

const getProjects = async () => {
    const db = firebase.firestore();
    const result = await db.collection("projects").orderBy("id","desc").get();
    return result.docs.map(item => item.data());
}

export {
    auth,
    getAboutSection,
    updateSkills,
    getExperience,
    getProjects
}