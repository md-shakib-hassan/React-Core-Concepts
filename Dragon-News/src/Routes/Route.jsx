import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoriesNews from "../pages/CategoriesNews";
import AuthLayout from "../Layouts/AuthLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";


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
                loader:()=>fetch('/news.json') 
               
            }
        ]
    },{
        path:'auth',
        Component:AuthLayout,
        children:[
            {
                path:"/auth/login",
                Component: LoginPage,
            },{
                path:"/auth/register",
                Component:RegisterPage,
            }
        ]
        
    },{
        path:"/news_detail/:id",
        loader:()=>fetch("/news.json"),
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
    }
])