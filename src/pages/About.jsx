import { useLocation } from "react-router-dom";
import NavBar from "../components/HomeComponents/header/NavBar";


const About = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {
                pathname==="/about" && <NavBar></NavBar>
            }
            
        </div>
    );
};

export default About;