import { useContext } from "react";
import { AuthContext } from "../contexApi/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {pathname} = useLocation()
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    }

    if(user){
        return children
    }
   
    return (
        <div>
            <Navigate state={pathname} to="/login"></Navigate>
        </div>
    );
};

PrivateRoute.propTypes={
    children: PropTypes.object
}

export default PrivateRoute;