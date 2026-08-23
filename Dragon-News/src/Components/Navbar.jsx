import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'


const Navbar = () => {

  
    const {user,isLogin,Logout,setLoginInfo} = useContext(AuthContext);
    

    const handleLogout =()=>{
            Logout()
            .then(result =>{
                alert("Logout");
                setLoginInfo(false);
            })
            .catch(error =>{
               
            })
    }
 
    return (
        <div className=''>
            <div className="navbar bg-base-200 ">
                <div className="navbar-start">
                    {/* <p>{user.email}</p> */}
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='font-semibold'>Home</NavLink></li>
                        <li><NavLink to='/' className='font-semibold' >About</NavLink></li>
                        <li><NavLink to='/' className='font-semibold'>Career</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end gap-x-2 ">
                    <img src="/src/assets/user.png" className='rounded-[50%]' alt="" />
                   {
                    user ? <button onClick={handleLogout}>Logout</button> :  <NavLink to='/auth/login' className="btn bg-primary text-white ">Login</NavLink>
                   }
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar