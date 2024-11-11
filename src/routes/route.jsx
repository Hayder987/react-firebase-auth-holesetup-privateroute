import { createBrowserRouter } from "react-router-dom";
import Root from "./Roots/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";


export const route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

