import { useEffect, useState } from "react";
import LeftSideCategory from "./LeftSideCategory";
import { Outlet } from "react-router-dom";


const Main = () => {

    const [category, setCategory] = useState([])

    useEffect(()=>{
      fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(res=> res.json())
      .then(data=> setCategory(data.data.news_category))
    },[])



    return (
        <div className="grid grid-cols-12 gap-8">
           <div className="grid col-span-3">
            <LeftSideCategory category={category}></LeftSideCategory>
           </div> 
           <div className="grid col-span-6">
             <Outlet></Outlet>
           </div>
           <div className="grid col-span-3">
              right side
           </div>
        </div>
    );
};

export default Main;