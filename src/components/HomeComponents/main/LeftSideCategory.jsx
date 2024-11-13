import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideCategory = ({category}) => {

    const [btnName, setBtnName] = useState("01")

    return (
        <div className="">
            <h1 className="text-xl font-semibold mb-5">All Caterogy</h1>
         <div className="flex flex-col gap-4">
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