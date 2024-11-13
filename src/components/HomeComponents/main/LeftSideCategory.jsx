import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaArrowAltCircleDown } from "react-icons/fa";

const LeftSideCategory = ({category}) => {

    const [btnName, setBtnName] = useState("01");
    const [barCondition, setBarCondition] = useState(false);

    return (
        <div className=" ">
            <h1 className="text-xl font-semibold mb-5">All Caterogy</h1>
            <div onClick={()=>setBarCondition(!barCondition)} className="flex items-center md:hidden bg-gray-100 p-3 justify-between mb-3">
               <button  className="text-4xl px-4"><BsFillMenuButtonWideFill /></button>
               <p className="font-medium text-gray-400">click here</p>
               <p className="text-4xl px-4"><FaArrowAltCircleDown /></p>
            </div>
         <div className={`${barCondition?"flex":"hidden md:flex"} flex-col gap-4 bg-gray-50`}>
         {
            category.map(item=>(
                <NavLink to={`/category/${item.category_id}`} onClick={()=> setBtnName(item.category_id)} key={item.category_id}
                 className={`${btnName===item.category_id?"bg-red-200":"bg-gray-100"} py-4 px-12 text-xl font-semibold rounded-xl`}>
                {item.category_name}
                </NavLink>
            ))
         }   
         </div>
        </div>
    );
};

LeftSideCategory.propTypes = {
    category:PropTypes.array
}

export default LeftSideCategory;