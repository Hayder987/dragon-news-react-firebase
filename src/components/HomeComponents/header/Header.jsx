
import HeaderBanner from './HeaderBanner';
import HeaderMarquee from './HeaderMarquee';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className="mt-4">
                <HeaderMarquee></HeaderMarquee>
            </div>
            <div className="">
                <NavBar></NavBar>
            </div>
        </div>
    );
};

export default Header;