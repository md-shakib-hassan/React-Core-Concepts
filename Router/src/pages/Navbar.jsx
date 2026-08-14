import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import { Footer } from '../components/Footer'


export const Navbar = () => {

    const navigation = useNavigate();
    const isNavigating = Boolean (navigation.location);
    return (
        <>
            <div>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/home" >Home</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/about">About</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/contact">Contact</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/services">Services</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to='/users' >Users</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to='/whyus' >Why Us?</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to='/posts' >Posts</NavLink>

                {
                    isNavigating && <h1 className='text-5xl text-red-600'>Loading..........</h1>
                }

                <Outlet>

                </Outlet>
            </div>

            <Footer></Footer>



        </>


    )
}
