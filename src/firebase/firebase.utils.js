import { getFirestore } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCW00G_3FlT_Tar_sF0I0Q6Gpto07VECJ8",
  authDomain: "react-e-commerce-ad3fc.firebaseapp.com",
  projectId: "react-e-commerce-ad3fc",
  storageBucket: "react-e-commerce-ad3fc.appspot.com",
  messagingSenderId: "194239960854",
  appId: "1:194239960854:web:6a4d195e9c4c49f2e8a237",
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

const firebaseFirestore = getFirestore(app);
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
