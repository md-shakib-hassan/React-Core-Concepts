import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
    const { loading,user } = useContext(AuthContext);

    // console.log(isLogin);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }

    return <Navigate state={`${location.pathname}`} to="/auth/login" replace />;
};

export default PrivateRoute;