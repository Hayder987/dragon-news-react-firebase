import { Link, useLoaderData } from "react-router-dom";
import HeaderBanner from "../components/HomeComponents/header/HeaderBanner";
import RightSideBar from "../components/HomeComponents/main/RightSideBar";
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsDetails = () => {

    const newsData = useLoaderData();
    const {image_url, title,details} = newsData.data[0] || [];

    return (
        <div>
          <HeaderBanner></HeaderBanner>
          <section className="flex gap-10 my-12">
            <div className="md:w-9/12">
            <h1 className="text-xl mb-6 font-bold text-gray-500">Dragon News</h1>
              <div className="border p-4">
               
               <img src={image_url} alt="" className="" />
               <h3 className="text-2xl font-bold my-6">{title}</h3>
               <p className="text-gray-500 mb-8">{details}</p>
               <Link to="/"><button className="flex justify-center gap-3 items-center text-xl py-3 px-6 text-white bg-[#D72050]">
                <span className="">
                <FaArrowLeftLong />
                </span>
                 All news in this category
                </button></Link>
              </div>

            </div>
            <div className="w-3/12 hidden md:flex flex-col ">
               <RightSideBar></RightSideBar>
            </div>
          </section>  
        </div>
    );
};

export default NewsDetails;