import { createBrowserRouter } from "react-router-dom";
import Root from "./Roots/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PriveRoute from "../private-route/PriveRoute";
import Profile from "../private-route/Profile";
import DashBord from "../private-route/DashBord";


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
            },
            {
                path:"/profile",
                element:<PriveRoute><Profile></Profile></PriveRoute>
            },
            {
                path:"/dashboard",
                element:<PriveRoute><DashBord></DashBord></PriveRoute>
            }
        ]
    }
])

