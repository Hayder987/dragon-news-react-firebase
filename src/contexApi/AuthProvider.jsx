import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const registerUser=(email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
      const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      })

      return ()=>{
        unsubcribe()
      }

    },[]);

    const logOut =()=>{
       return signOut(auth)
    }


    const authInfo = {
        registerUser,
        loginUser,
        user,
        logOut
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