import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../contexApi/AuthProvider";
import { toast } from "react-toastify";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const signOutHandler =()=>{
        logOut()
        .then(()=>{
            toast.info("Sign-Out Success")
            navigate("/login")
        })
        .catch(err=>{
            toast.info(err.message)
        })}
    

    return (
        <div className="flex justify-between items-center p-6">
            <div className=""></div>
            <div className="">
                <ul className="flex gap-10">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-3">
            {
                user? <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full" />:
                <p className="text-4xl"><BsPersonCircle /></p>
            }
            {
                user ? <button onClick={signOutHandler} className="bg-black py-3 px-6 text-white font-semibold">
                Logout
             </button> :
             <Link to="/login">
             <button className="bg-black py-3 px-6 text-white font-semibold">
                 Login
             </button>
             </Link>
            }

            
            </div>
        </div>
    );
};

export default NavBar;