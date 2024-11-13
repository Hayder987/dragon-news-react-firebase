import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>
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