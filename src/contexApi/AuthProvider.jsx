import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const registerUser=(email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        name:"hayder",
        registerUser,
        loginUser
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