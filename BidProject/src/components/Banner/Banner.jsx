import React from 'react'

export const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/d7/6d/c5/d76dc5b576278b4a83840f7d9227f805.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className=" text-neutral-content ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold w-1/2">Bid on Unique Items from Around the World</h1>
            <p className="mb-5 w-1/3">
              Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
            </p>
            <button className="btn btn-primary">Explore Auctions</button>
          </div>
        </div>
      </div>
    </>

  )
}
