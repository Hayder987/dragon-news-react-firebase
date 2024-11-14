import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const CardDetails = () => {
     
    const data = useLoaderData();

    return (
        <div>
            <h1 className="text-xl font-semibold mb-5">Dragon News Home</h1>
           {
            data.data.length>0?<div className="flex flex-col gap-6">
            {
             data.data.map(item=> (
                 <Card key={item._id} item={item}></Card>
             ))
            }
            </div>:
            <div className="">
                <h1 className="text-3xl font-bold">No Data Found</h1>
            </div>
           }
        </div>
    );
};

export default CardDetails;