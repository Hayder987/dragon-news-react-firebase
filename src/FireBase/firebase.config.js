

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCZo0vUaCNGoaIIVhW4eoeFAnLvuLl_qU",
  authDomain: "dragonnews-auth-react.firebaseapp.com",
  projectId: "dragonnews-auth-react",
  storageBucket: "dragonnews-auth-react.firebasestorage.app",
  messagingSenderId: "77326573744",
  appId: "1:77326573744:web:464f125cfcb86b0d14db75"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)