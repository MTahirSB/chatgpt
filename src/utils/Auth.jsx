import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import { auth, provider } from "../firebase-config";
  
  // component converted to a custom hook
  
 async function Auth(setFn) {
    function googlesignin() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const u = result.user;
          setFn(u);
          // redirect('/')
        })
        .catch((error) => {
          setFn(null);
        });
    }
  
    function createUser(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const u = userCredential.user;
          setFn(u);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  
          console.log(error, errorMessage);
          // ..
        });
    }
  
    function signinUser(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  
    async function signout() {
      await signOut(auth)
        .then(() => setFn(null))
        .catch(() => setFn(null));
    }
  
    return [googlesignin, createUser ,signinUser, signout];
  }
  
  export default Auth;