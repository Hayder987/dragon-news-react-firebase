import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";


const NavBar = () => {
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
            <p className="text-4xl"><BsPersonCircle /></p>
            <button className="bg-black py-3 px-6 text-white font-semibold">
                Login
            </button>
            </div>
        </div>
    );
};

export default NavBar;