
import { createBrowserRouter } from "react-router";
import App from "../App";
import RegisterForm from "../Components/Login/RegisterForm";
import { Login } from "../Components/Login/Login";

export const router = createBrowserRouter([{
    path:"/",
    Component:App,
    children:[
        {
        path:"register",
        Component:RegisterForm
    },{
        path:"login",
        Component:Login,
    }
]
}])

