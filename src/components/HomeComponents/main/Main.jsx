import { useEffect, useState } from "react";
import LeftSideCategory from "./LeftSideCategory";
import { Outlet } from "react-router-dom";
import SocialLogin from "./SocialLogin";


const Main = () => {

    const [category, setCategory] = useState([])

    useEffect(()=>{
      fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(res=> res.json())
      .then(data=> setCategory(data.data.news_category))
    },[])



    return (
        <div className="grid grid-cols-12 gap-8 relative">
           <div className="grid col-span-12 md:col-span-3">
            <LeftSideCategory category={category}></LeftSideCategory>
           </div> 
           <div className="grid col-span-12 md:col-span-6">
             <Outlet></Outlet>
           </div>
           <div className="grid col-span-12 row-start-1 md:col-span-3 md:row-span-3">
            <div className="">
                <div className="">
                  <h1 className="text-xl font-semibold mb-5">Login With</h1>
                </div>
                <div className="">
                  <SocialLogin></SocialLogin>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Main;