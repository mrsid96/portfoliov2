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
const db = firebase.firestore();

const getAboutSection = async () => {
    const result = await db.collection("about").doc("Yv8rWhvN4oMwkpj3Q9RQ").get();
    return result.data();
}

const updateSkills = async (skills) => {
    const result = await db.collection("about").doc("Yv8rWhvN4oMwkpj3Q9RQ").update({
        skills
    });
    return result;
}

const getExperience = async () => {
    const result = await db.collection("experience").orderBy("id","desc").get();
    return result.docs.map(item => item.data());
}

const getProjects = async () => {
    const result = await db.collection("projects").orderBy("id","desc").get();
    return result.docs.map(item => item.data());
}

const addMessage = async (name, email, message) => {
    const result = await db.collection("messages").add({
        name, email, message
    });
    console.log(result, result.data());
}

const updateLinks = async (links) => {
    const result = await db.collection("about").doc("Yv8rWhvN4oMwkpj3Q9RQ").update({
        links
    });
    return result;
}

export {
    auth,
    getAboutSection,
    updateSkills,
    getExperience,
    getProjects,
    addMessage,
    updateLinks
}