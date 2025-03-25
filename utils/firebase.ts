import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbsSuj7XQoDm61orB32aaBSr8DRRkhWGM",
    authDomain: "auth-project-ecommerce.firebaseapp.com",
    projectId: "auth-project-ecommerce",
    storageBucket: "auth-project-ecommerce.firebasestorage.app",
    messagingSenderId: "652256679656",
    appId: "1:652256679656:web:609c29fd38c0ea0cb41b5d",
    measurementId: "G-WLP28NCX8B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };