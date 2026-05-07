import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                      <li className='text-xl'><a>Home</a></li>  
                    <li className='text-xl'><a>Auctions</a></li>
                    <li className='text-xl'><a>Categories</a></li>
                    <li className='text-xl'><a>How to works</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">AuctionGallery</a>
            </div>
            
            <div className="navbar-center hidden lg:flex md:flex md:mx-auto">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-xl'><a>Home</a></li>  
                    <li className='text-xl'><a>Auctions</a></li>
                    <li className='text-xl'><a>Categories</a></li>
                    <li className='text-xl'><a>How to works</a></li>
                </ul>

               
            </div>

            {/* here navbar profile image  */}

            <div className='space-x-5'>
                 <div className="indicator items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>

                 <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-8  rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
            </div>

           

        </div>
    )
}
