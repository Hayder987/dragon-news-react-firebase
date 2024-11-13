import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CardDetails from "../components/HomeComponents/main/CardDetails";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                children:[
                    {
                        path:"/category/:id",
                        element:<CardDetails></CardDetails>,
                        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                    }
                ]
            },
            {
                path:"/about",
                element: <About></About>
            },
            {
                path:"/career",
                element: <Career></Career>
            }
        ]
    }
]);

export {router}