
import PropTypes from "prop-types";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";


const Card = ({item}) => {
  const navigate = useNavigate();
    const {
      _id,
      rating: { badge },
      total_view,
      title,
      author: { name, published_date, img },
      image_url,
      details,
    } = item;
    
    return (
        <div onClick={()=>navigate(`/news/${_id}`)} className="border">
           <div className="flex justify-between items-center p-6 bg-gray-100">
               <div className="flex gap-3 items-center">
                  <div className="">
                    <img src={img} alt="" className="w-10 h-10 rounded-full" />
                  </div>
                  <div className="">
                    <h3 className="font-bold mb-2">{name}</h3>
                    <p className="">{published_date}</p>
                  </div>
               </div> 
               <div className="flex gap-4">
                <p className="text-2xl"><FaRegBookmark /></p>
                <p className="text-2xl"><IoShareSocialOutline /></p>
               </div>
           </div>
           <div className="px-4">
               <div className="">
                <h3 className="py-4 px-2 text-xl font-bold">{title}</h3>
               </div>
               <div className="mb-3">
                <img src={image_url} alt="" className="w-full object-cover" />
               </div>
               <div className="mb-4">
                 <p className="text-gray-500">{details.slice(0, 220)} ...</p>
                 <h3 className="text-red-500 font-bold">Read More</h3>
               </div>
               <div className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                      />
                       <p className="">{badge}</p>
                    </div>
                    <div className="flex gap-3">
                        <p className="text-xl"><FaEye /></p>
                        <p className="font-bold">{total_view}</p>
                    </div>
               </div>
           </div>
        </div>
    );
};

Card.propTypes={
    item: PropTypes.object.isRequired
}

export default Card;