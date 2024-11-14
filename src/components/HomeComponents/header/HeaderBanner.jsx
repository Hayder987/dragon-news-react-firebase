import moment from "moment";
import logo from '../../../assets/logo.png'


const HeaderBanner = () => {
    return (
        <div>
            <div className="flex justify-center p-4">
              <img src={logo} alt="" className="" />
            </div>
            <p className="text-center text-gray-400 mb-3">Journalism Without Fear or Favour</p>
            <h3 className="text-center font-medium text-xl">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
        </div>
    );
};

export default HeaderBanner;