import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { Footer } from '../components/Footer'


export const Navbar = () => {
    return (
        <>
            <div>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/home" >Home</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/about">About</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/contact">Contact</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to="/services">Services</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to='/learn' >Learn More</NavLink>
                <NavLink className='text-purple-600 mx-5 font-extrabold text-5xl' to='/whyus' >Why Us?</NavLink>
                <Outlet>

                </Outlet>
            </div>

            <Footer></Footer>



        </>


    )
}
