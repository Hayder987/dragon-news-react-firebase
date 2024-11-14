import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const registerUser=(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserData =(name, imgPath)=>{
        setLoading(true)
      return updateProfile(auth.currentUser, {displayName:name, photoURL:imgPath})
    }

    const googleSignIn =()=>{
        const googleProvider = new GoogleAuthProvider()

       return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn =()=>{
        const githubProvider = new GithubAuthProvider()

       return signInWithPopup(auth, githubProvider)
    }

    useEffect(()=>{
      const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })

      return ()=>{
        unsubcribe()
      }

    },[]);

    const resetPassword = (email)=>{
     return sendPasswordResetEmail(auth,email)
    }

    const logOut =()=>{
       return signOut(auth)
    }


    const authInfo = {
        registerUser,
        loginUser,
        user,
        logOut,
        updateUserData,
        googleSignIn,
        githubSignIn,
        loading,
        resetPassword
    }


    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.object
}

export default AuthProvider;