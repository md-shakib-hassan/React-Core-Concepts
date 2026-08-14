import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='my-5'>
            <div className="navbar bg-base-200 ">
                <div className="navbar-start">
                    
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='font-semibold'>Home</NavLink></li>
                        <li><NavLink className='font-semibold' >About</NavLink></li>
                        <li><NavLink className='font-semibold'>Career</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end gap-x-2 ">
                    <img src="/src/assets/user.png" alt="" />
                    <a className="btn bg-primary text-white ">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar