import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoriesNews from "../pages/CategoriesNews";


export const router = createBrowserRouter([
    {
        path:"/",
        Component:HomeLayout,
        children:[
            {
                path:"",
                Component:Home,
            },
            {
                path:"/categories/:id",
                Component:CategoriesNews,
            }
        ]
    },{
        path:'auth',
        
    }
])