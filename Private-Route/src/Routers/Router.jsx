import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Components/Log/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import Order from "../Order/Order";
import Profile from "../Profile/Profile";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'/',
                Component:Home,
            },{
                path:'login',
                Component:Login,
            },
            {
                path:'register',
                Component:Register,
            },{
                path: 'order',
                element:<PrivateRoute><Order></Order></PrivateRoute>
            },{
                path:'profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])