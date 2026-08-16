import React, { createContext, useEffect, useState } from 'react'
import { app } from '../FireBase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLogin,setLoginInfo] = useState(false);
    const [loading,setLoading] = useState(true);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Logout =()=>{
        return signOut(auth);
    }
    const Login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            // alert("Observe Auth.")
        })

        return () => {
            unSubscribe();
        }


    }, [])

    const userDetails = {
        user,
        setUser,
        createUser,
        Login,
        isLogin,
        setLoginInfo,
        Logout,
        loading,

    }

    return (
        <div>
            <AuthContext value={userDetails}>
                {children}
            </AuthContext>
        </div>
    )
}

export default AuthProvider