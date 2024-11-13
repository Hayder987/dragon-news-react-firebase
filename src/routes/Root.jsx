import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/HomeComponents/header/NavBar";


const Root = () => {
    const {pathname} = useLocation();
    
    return (
        <div className="container mx-auto">
            {
                pathname==="/"?"":<NavBar></NavBar>
            }
           
            <div className="min-h-[80vh]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;