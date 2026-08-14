import React, { createContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../Firebase/Firebase'

const AuthProvider = ({ children }) => {

  const [user,setUser]=useState(null);
  const [loader,setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);

  }

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userSignOut = ()=>{
    setLoader(true);
    return signOut(auth);
  }

  // onAuthStateChanged(auth,(currentUser)=>{
  //   if(currentUser){
  //     console.log("Current User",currentUser);
  //   }else{
  //     console.log("not here");
  //   }
  // })

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => { 
        // console.log("Current User", currentUser); 
        setLoader(false);
        setUser(currentUser); 
    })
      

    return ()=>{
      unSubscribe();
    }
    
  }, [])


   const userInfo = {
    user,
    createUser,
    signInUser,
    userSignOut,
    loader,
  }

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider