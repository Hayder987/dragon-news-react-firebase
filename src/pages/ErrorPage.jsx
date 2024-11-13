import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="p-4 md:p-10">
              <h1 className="text-5xl font-bold text-center mb-4">{error.status}</h1>
              <h3 className="text-3xl font-bold text-center mb-3">{error.statusText}</h3>
              <h2 className="text-4xl font-bold text-center mb-3">{error.data}</h2>
              <img src="https://i.ibb.co.com/nQqnRLf/page-Not-found.jpg" alt="" className="" />
            
            </div>
            <div className="mt-6">
              <Link to="/"><button className="btn rounded-none">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;