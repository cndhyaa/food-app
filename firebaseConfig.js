import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJUppIYbPSpUO08JJ7eNk02lpPRTc3H3A",
    authDomain: "authentication-tutorial-5abe7.firebaseapp.com",
    projectId: "authentication-tutorial-5abe7",
    storageBucket: "authentication-tutorial-5abe7.appspot.com",
    messagingSenderId: "1097009764847",
    appId: "1:1097009764847:web:07241c67956900f2227e1a",
    measurementId: "G-G14FKWYPDL"
};

let app;
if(!app) {
    app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app)
