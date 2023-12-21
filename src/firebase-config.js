import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDPDwxupahhUtu0hFBAl3Qhk-wx6U6Y5fg",
    authDomain: "mtgpt-5e2d9.firebaseapp.com",
    projectId: "mtgpt-5e2d9",
    storageBucket: "mtgpt-5e2d9.appspot.com",
    messagingSenderId: "529599295198",
    appId: "1:529599295198:web:c8183b5f641601fa585c4f"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export {auth , provider, db}
export default app;

  