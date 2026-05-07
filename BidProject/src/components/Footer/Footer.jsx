import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">

            <div>
                    <h1 className='font-bold text-3xl'><span className='text-blue-500'>Auction</span><span className='text-yellow-400'>Gallery</span></h1>
                </div>

                <div>
                    <h1 className='font-bold text-lg '>Bid . Win . Own</h1>
                </div>
            <nav className="grid grid-flow-col gap-4">
                
                <a className="link link-hover text-lg">Home</a>
                <a className="link link-hover text-lg">Auctions</a>
                <a className="link link-hover text-lg">Categories</a>
                <a className="link link-hover text-lg">How to works</a>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}
