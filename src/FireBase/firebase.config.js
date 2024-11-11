
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDHvs5W6P_g86S4vlLFLLiGGHcfiAln4Q",
  authDomain: "email-password-auth-private3.firebaseapp.com",
  projectId: "email-password-auth-private3",
  storageBucket: "email-password-auth-private3.firebasestorage.app",
  messagingSenderId: "278597597698",
  appId: "1:278597597698:web:450708cefb66a77d24051b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);