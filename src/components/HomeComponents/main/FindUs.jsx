import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold my-6">Find Us On</h1>
             <div className="join join-vertical flex">
               <button className="btn join-item gap-6">
                <span className="text-blue-600 text-2xl"><FaFacebook></FaFacebook></span>
                <span className="text-xl">FaceBook</span>
               </button>
               <button className="btn join-item gap-8">
                <span className="text-blue-400 text-2xl"><FaTwitter></FaTwitter></span>
                <span className="text-xl">Twitter</span>
               </button>
               <button className="btn join-item gap-6">
                <span className="text-red-400 text-2xl"><FaInstagram></FaInstagram></span>
                <span className="text-xl">Instagram</span>
               </button>
             </div>
             <div className="mt-12 min-w-full min-h-64 bg-gray-200">
                <p className="text-center text-gray-400 p-10">Ads Area</p>
             </div>
             <div className="mt-12 min-w-full min-h-64 bg-gray-200">
                <p className="text-center text-gray-400 p-10">Ads Area</p>
             </div>
        </div>
    );
};

export default FindUs;