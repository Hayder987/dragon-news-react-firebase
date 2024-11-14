import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CardDetails from "../components/HomeComponents/main/CardDetails";
import NewsDetails from "../pages/NewsDetails";

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
                    },
                    {
                        path:"/",
                        element:<Navigate to="/category/01"></Navigate>
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
            },
            {
                path:"/news/:id",
                element: <NewsDetails></NewsDetails>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
            }
        ]
    }
]);

export {router}