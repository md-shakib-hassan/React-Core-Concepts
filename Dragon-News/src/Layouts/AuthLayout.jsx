import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
        
        <nav className='py-4'>
            <Navbar></Navbar>
        </nav>

        <main className='container mx-auto py-5 '>
            <Outlet></Outlet>
        </main>

    </div>
  )
}

export default AuthLayout