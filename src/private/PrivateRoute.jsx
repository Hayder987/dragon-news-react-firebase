import { useContext } from "react";
import { AuthContext } from "../contexApi/AuthProvider";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)

    if(user){
        return children
    }
    else{
        toast.info("You Need To Login First")
    }

    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;