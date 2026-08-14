import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

import LeftAside from '../Components/HomeLayout/LeftAside'
import RightAside from '../Components/HomeLayout/RightAside'

const HomeLayout = () => {
  return (
    <div>

    <header>
            <Header></Header>
            {/* <section className=''> <LatestNews></LatestNews></section> */}
    </header>
   
    <nav className='container mx-auto'><Navbar></Navbar></nav>

    <main className='container mx-auto grid grid-cols-12 '>
        
        <aside className='col-span-3'>
            <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
            <Outlet></Outlet>
        </section>

       <aside className='col-span-3'>
        <RightAside></RightAside>
       </aside>
    </main>



    </div>
  )
}

export default HomeLayout