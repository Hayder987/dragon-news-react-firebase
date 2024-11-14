import PropTypes from "prop-types";
import { createContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const authInfo = {
        name:"hayder"
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