
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
   
    
    return (
        <div className="container mx-auto p-2">
           
            <div className="min-h-[80vh]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;