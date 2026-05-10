import React from 'react'
import { Link, Outlet } from 'react-router'
import { Footer } from '../components/Footer'


export const Navbar = () => {
    return (
        <>
        <div>
            <Link className='text-purple-600 mx-5 font-extrabold text-5xl' to="/home" >Home</Link>
       <Link className='text-purple-600 mx-5 font-extrabold text-5xl' to= "/about">About</Link>
       <Link className='text-purple-600 mx-5 font-extrabold text-5xl' to="/contact">Contact</Link>
       <Link className='text-purple-600 mx-5 font-extrabold text-5xl' to="/services">Services</Link>

        <Outlet>

        </Outlet>
        </div>
        
       <Footer></Footer>
       

       
        </>
              
        
    )
}
