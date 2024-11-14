import { useLocation } from "react-router-dom";
import NavBar from "../components/HomeComponents/header/NavBar";


const Career = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {
                pathname==="/career" && <NavBar></NavBar>
            }
            
        </div>
    );
};

export default Career;