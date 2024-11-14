import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const HeaderMarquee = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
     fetch("https://openapi.programming-hero.com/api/news/category/01")
     .then(res=> res.json())
     .then(data=> setData(data.data))
  },[])

  

    return (
        <div className="flex items-center gap-4 bg-gray-200 p-3">
            <button className="bg-[#D72050] text-white text-xl font-medium px-4 py-2">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
              <div className="flex gap-10">
                {
                  data.map(item=>(
                    <p key={item._id} className="">{item.title}</p>
                  ))
                }
              </div>
            </Marquee>
            
        </div>
    );
};

export default HeaderMarquee;